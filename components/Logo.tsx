import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 group ${className}`}
      aria-label="Altévo - Accueil"
    >
      <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-altevo-yellow via-altevo-orange to-altevo-red flex items-center justify-center overflow-hidden shadow-lg shadow-altevo-yellow/20 group-hover:shadow-altevo-yellow/40 transition-shadow duration-300">
        <span className="text-altevo-black font-bold text-lg relative z-10">A</span>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight">
          <span className="text-white">Alté</span>
          <span className="gradient-text">vo</span>
        </span>
      )}
    </Link>
  );
}
