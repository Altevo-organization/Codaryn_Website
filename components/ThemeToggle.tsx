"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative w-9 h-9 rounded-full flex items-center justify-center text-slate-400"
        aria-label="Changer le thème"
      >
        <Sun className="h-[18px] w-[18px]" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center",
        "transition-colors duration-300",
        "hover:bg-white/10 dark:hover:bg-white/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-altevo-violet focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      )}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      <div className="relative w-[18px] h-[18px]">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-[18px] w-[18px] text-amber-300" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-[18px] w-[18px] text-slate-600" />
        </motion.div>
      </div>
    </button>
  );
}
