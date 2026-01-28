import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-md mx-auto">
          {/* 404 number */}
          <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">
            404
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page introuvable
          </h1>

          {/* Description */}
          <p className="text-slate-400 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            Vérifiez l'URL ou retournez à l'accueil.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/" className="gap-2">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact" className="gap-2">
                <ArrowLeft className="w-5 h-5" />
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
