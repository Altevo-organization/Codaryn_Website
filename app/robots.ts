import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codaryn.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/mentions-legales", "/politique-confidentialite"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
