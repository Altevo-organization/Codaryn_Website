import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="Codaryn Software Studio — Accueil"
    >
      {/* Wordmark icon: stylised "C" mark */}
      <div className="relative w-8 h-8 rounded-md bg-altevo-yellow/10 border border-altevo-yellow/20 flex items-center justify-center shrink-0 group-hover:bg-altevo-yellow/15 group-hover:border-altevo-yellow/35 transition-all duration-200">
        <span className="text-altevo-yellow font-bold text-sm font-mono leading-none">C</span>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-white font-semibold text-base tracking-tight">
            Codaryn
          </span>
          <span className="text-altevo-gray-light text-[10px] font-medium tracking-widest uppercase mt-0.5">
            Software Studio
          </span>
        </div>
      )}
    </Link>
  );
}
