import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f2e9e4",
          DEFAULT: "#c9ada7",
          dark: "#4a4e69"
        }
      },
      fontFamily: {
        display: ["var(--font-manifesto)", "var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "noise-pattern":
          "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
