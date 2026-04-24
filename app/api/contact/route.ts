import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { contactApiSchema } from "@/lib/validations";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

// Rate limit configuration: 5 requests per minute per IP
const RATE_LIMIT_CONFIG = {
  limit: 5,
  windowMs: 60 * 1000, // 1 minute
};

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    const rateLimitResult = rateLimit(clientIp, RATE_LIMIT_CONFIG);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Trop de demandes. Veuillez réessayer dans quelques instants.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimitResult.resetTime.toString(),
          },
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = contactApiSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Données invalides",
          errors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, phone, subject, message, website } =
      validationResult.data;

    // Honeypot check - if website field is filled, it's a bot
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Message envoyé avec succès",
      });
    }

    // Check required environment variables
    const emailTo = process.env.EMAIL_TO;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!emailTo || !smtpHost || !smtpUser || !smtpPass) {
      console.error("Missing email configuration environment variables");
      return NextResponse.json(
        {
          success: false,
          message:
            "Configuration email manquante. Veuillez contacter l'administrateur.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || "587", 10),
      secure: smtpPort === "465",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0B0B0C 0%, #111318 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nouvelle demande de contact</h1>
    <p style="color: #4F7CFF; margin: 5px 0 0 0;">via le site Codaryn</p>
  </div>

  <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
    <h2 style="color: #0A1628; font-size: 18px; margin-top: 0; padding-bottom: 10px; border-bottom: 2px solid #4F7CFF;">
      📧 Informations du contact
    </h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #64748b; width: 120px;">Nom</td>
        <td style="padding: 8px 0; color: #0A1628; font-weight: 500;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Email</td>
        <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4F7CFF;">${email}</a></td>
      </tr>
      ${company ? `
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Entreprise</td>
        <td style="padding: 8px 0; color: #0A1628;">${company}</td>
      </tr>
      ` : ""}
      ${phone ? `
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Téléphone</td>
        <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #4F7CFF;">${phone}</a></td>
      </tr>
      ` : ""}
    </table>

    <h2 style="color: #0A1628; font-size: 18px; margin-top: 30px; padding-bottom: 10px; border-bottom: 2px solid #4F7CFF;">
      📝 Sujet
    </h2>
    <p style="color: #0A1628; font-weight: 500; margin: 15px 0;">${subject}</p>

    <h2 style="color: #0A1628; font-size: 18px; margin-top: 30px; padding-bottom: 10px; border-bottom: 2px solid #4F7CFF;">
      💬 Message
    </h2>
    <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 15px;">
      <p style="color: #334155; margin: 0; white-space: pre-wrap;">${message}</p>
    </div>
  </div>

  <div style="background: #f1f5f9; padding: 20px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
    <p style="color: #64748b; font-size: 12px; margin: 0;">
      📊 <strong>Métadonnées</strong><br>
      Date: ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}<br>
      IP: ${clientIp}
    </p>
    <p style="color: #94a3b8; font-size: 11px; margin: 15px 0 0 0; text-align: center;">
      Cet email a été envoyé automatiquement depuis le formulaire de contact du site codaryn.com
    </p>
  </div>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `"Codaryn - Contact" <${smtpUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `[Codaryn] ${subject} — ${name}`,
      html: htmlContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès",
      },
      {
        headers: {
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}

// Only allow POST method
export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  );
}
