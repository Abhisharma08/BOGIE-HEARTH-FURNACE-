import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "5vw",
        sm: "5vw",
        lg: "5vw",
        xl: "5vw",
        "2xl": "5vw",
      },

      screens: {
        "2xl": "1440px",
      },
    },

    extend: {
      /* =========================
         FONTS
      ========================= */

      fontFamily: {
        body: ["var(--font-body)"],
        headline: ["var(--font-display)"],
        mono: ["var(--font-body)"],
      },

      /* =========================
         COLORS
      ========================= */

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",

        input: "hsl(var(--input))",

        ring: "hsl(var(--ring))",

        /* =========================
           INDUSTRIAL TOKENS
        ========================= */

        forge: {
          black: "#0D0D0D",
        },

        steel: {
          dark: "#1A1A1F",
          mid: "#2C2C35",
        },

        molten: {
          orange: "#E85D00",
        },

        heat: {
          amber: "#F5A623",
        },

        smoke: {
          white: "#F0EEE8",
        },

        ash: {
          grey: "#8A8A8A",
        },
      },

      /* =========================
         BORDER RADIUS
      ========================= */

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* =========================
         SPACING SYSTEM
      ========================= */

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      /* =========================
         TYPOGRAPHY SCALE
      ========================= */

      fontSize: {
        "hero-sm": [
          "4.5rem",
          {
            lineHeight: "0.95",
            letterSpacing: "0.02em",
          },
        ],

        "hero-lg": [
          "7rem",
          {
            lineHeight: "0.9",
            letterSpacing: "0.02em",
          },
        ],

        "section-title": [
          "4rem",
          {
            lineHeight: "1",
            letterSpacing: "0.01em",
          },
        ],

        "label-sm": [
          "0.75rem",
          {
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          },
        ],
      },

      /* =========================
         SHADOWS
      ========================= */

      boxShadow: {
        forge:
          "0 8px 32px rgba(0,0,0,0.45)",

        glow:
          "0 0 40px rgba(232,93,0,0.25)",

        card:
          "0 12px 40px rgba(0,0,0,0.35)",
      },

      /* =========================
         ANIMATIONS
      ========================= */

      keyframes: {
        "accordion-down": {
          from: { height: "0" },

          to: {
            height:
              "var(--radix-accordion-content-height)",
          },
        },

        "accordion-up": {
          from: {
            height:
              "var(--radix-accordion-content-height)",
          },

          to: { height: "0" },
        },

        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "slow-zoom": {
          "0%": {
            transform: "scale(1)",
          },

          "100%": {
            transform: "scale(1.05)",
          },
        },
      },

      animation: {
        "accordion-down":
          "accordion-down 0.2s ease-out",

        "accordion-up":
          "accordion-up 0.2s ease-out",

        "fade-up":
          "fade-up 0.8s ease forwards",

        "slow-zoom":
          "slow-zoom 14s ease-in-out infinite alternate",
      },

      /* =========================
         BACKGROUND GRADIENTS
      ========================= */

      backgroundImage: {
        "forge-gradient":
          "linear-gradient(135deg, #E85D00 0%, #F5A623 100%)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config