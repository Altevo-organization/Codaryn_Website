import Link from "next/link";
import Image from "next/image";

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
      <Image
        src="/codaryn_logo.png"
        alt="Codaryn"
        width={32}
        height={32}
        className="shrink-0"
        priority
      />

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
