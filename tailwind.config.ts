import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "system-ui", "sans-serif"],
      },
      colors: {
        neon: {
          green: "#39FF14",
          glow: "rgba(57, 255, 20, 0.4)",
        },
      },
      boxShadow: {
        stripe: "0 1px 2px rgba(0, 0, 0, 0.04)",
        "stripe-hover": "0 4px 12px rgba(0, 0, 0, 0.08)",
        neon: "0 0 20px rgba(57, 255, 20, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
