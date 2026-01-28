import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

/**
 * Logo component for Altévo
 *
 * Pour remplacer le logo :
 * 1. Placez votre fichier logo dans /public/logo.svg (ou .png, .webp)
 * 2. Si vous utilisez un format différent de SVG, modifiez src="/logo.svg" ci-dessous
 * 3. Ajustez width et height selon les proportions de votre logo
 *
 * Le logo actuel est un placeholder textuel.
 * Dès que vous ajoutez un fichier /public/logo.svg, il sera automatiquement utilisé.
 */
export function Logo({
  className = "",
  width = 140,
  height = 40,
  showText = true,
}: LogoProps) {
  // Placeholder logo - remplacer par votre vrai logo
  // Pour utiliser une image : décommenter le bloc Image et commenter le div placeholder

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="Altévo - Accueil">
      {/*
        Option 1 : Logo image (décommenter quand vous avez votre logo)
        <Image
          src="/logo.svg"
          alt="Altévo"
          width={width}
          height={height}
          priority
          className="h-auto w-auto"
        />
      */}

      {/* Option 2 : Logo placeholder textuel (à remplacer) */}
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-altevo-violet to-altevo-violet-light flex items-center justify-center overflow-hidden">
          <span className="text-white font-bold text-xl">A</span>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
        </div>
        {showText && (
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">Alté</span>
            <span className="gradient-text">vo</span>
          </span>
        )}
      </div>
    </Link>
  );
}
