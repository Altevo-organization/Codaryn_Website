import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Codaryn software studio theme
        altevo: {
          black: "#0B0B0C",
          dark: "#0F1115",
          "dark-light": "#16191f",
          "dark-accent": "#1e2229",
          gray: "#2e3340",
          "gray-light": "#64748b",
          // Blue accent system
          yellow: "#4F7CFF",
          "yellow-light": "#7b9fff",
          "yellow-dark": "#2d5ce8",
          orange: "#3b6fd4",
          "orange-light": "#6b94e8",
          "orange-dark": "#1a4ab8",
          red: "#6366f1",
          "red-light": "#a5b4fc",
          "red-dark": "#4338ca",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "aurora-1": {
          "0%, 100%": { transform: "translate(0%, 0%) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(30%, -20%) rotate(120deg) scale(1.1)" },
          "66%": { transform: "translate(-20%, 20%) rotate(240deg) scale(0.9)" },
        },
        "aurora-2": {
          "0%, 100%": { transform: "translate(0%, 0%) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(-30%, 20%) rotate(-120deg) scale(1.2)" },
          "66%": { transform: "translate(20%, -30%) rotate(-240deg) scale(0.8)" },
        },
        "aurora-3": {
          "0%, 100%": { transform: "translate(0%, 0%) rotate(0deg) scale(1.1)" },
          "33%": { transform: "translate(20%, 30%) rotate(60deg) scale(0.9)" },
          "66%": { transform: "translate(-30%, -10%) rotate(-60deg) scale(1.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "spotlight": {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "text-reveal": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        "border-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(79,124,255,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(79,124,255,0.3)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 15s ease infinite",
        "aurora-1": "aurora-1 25s ease infinite",
        "aurora-2": "aurora-2 30s ease infinite",
        "aurora-3": "aurora-3 20s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        spotlight: "spotlight 2s ease forwards",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 30s linear infinite",
        "text-reveal": "text-reveal 0.8s ease forwards",
        "border-flow": "border-flow 3s ease infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
