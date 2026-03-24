"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      website: "", // Honeypot
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.website) {
      // Bot detected, silently "succeed"
      setStatus("success");
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "success",
      });
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Une erreur est survenue");
      }

      setStatus("success");
      reset();
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "success",
      });
    } catch (error) {
      setStatus("error");
      toast({
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Message envoyé avec succès !
        </h3>
        <p className="text-zinc-400 mb-6">
          Nous avons bien reçu votre demande et vous répondrons sous 24h.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name & Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">
            Nom complet <span className="text-altevo-red">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Jean Dupont"
            {...register("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-altevo-red flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-altevo-red">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="jean.dupont@entreprise.fr"
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-altevo-red flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Company & Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Entreprise</Label>
          <Input
            id="company"
            placeholder="Nom de votre entreprise"
            {...register("company")}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && (
            <p id="company-error" className="text-sm text-altevo-red flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.company.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="06 12 34 56 78"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-altevo-red flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="subject">
          Sujet <span className="text-altevo-red">*</span>
        </Label>
        <Input
          id="subject"
          placeholder="Ex: Demande de devis pour un ERP"
          {...register("subject")}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-sm text-altevo-red flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-altevo-red">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Décrivez votre projet, vos besoins et vos contraintes..."
          className="min-h-[150px]"
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-altevo-red flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot field - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-to-r from-altevo-yellow to-altevo-orange text-altevo-black font-semibold hover:shadow-lg hover:shadow-altevo-yellow/20 transition-all duration-300"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Envoyer le message
          </>
        )}
      </Button>

      {/* Privacy note */}
      <p className="text-xs text-zinc-500 text-center">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a
          href="/politique-confidentialite"
          className="text-altevo-yellow hover:underline"
        >
          politique de confidentialité
        </a>
        . Vos données sont utilisées uniquement pour répondre à votre demande.
      </p>
    </form>
  );
}
