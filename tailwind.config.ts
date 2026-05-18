import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f5f9",
          100: "#e3e8f2",
          200: "#c1cce0",
          300: "#94a5c8",
          400: "#6478ab",
          500: "#445a92",
          600: "#344779",
          700: "#2b3a63",
          800: "#1f2a47",
          900: "#0f1e3d",
          950: "#080f24"
        },
        gold: {
          50: "#fbf8f1",
          100: "#f5ecd8",
          200: "#ead8b0",
          300: "#dcbe7e",
          400: "#cea455",
          500: "#c9a961",
          600: "#a8853c",
          700: "#8a6a32",
          800: "#71562d",
          900: "#5e4828"
        },
        cream: {
          50: "#faf7f2",
          100: "#f4ede0",
          200: "#e8dac0"
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite"
      },
      backgroundImage: {
        "gold-shimmer": "linear-gradient(110deg, #c9a961 30%, #f5ecd8 50%, #c9a961 70%)"
      }
    }
  },
  plugins: []
};

export default config;
