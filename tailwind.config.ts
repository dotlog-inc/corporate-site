import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "a1-gothic-b": ['A1ゴシック B JIS2004', 'sans-serif'],
        "a1-gothic-m": ['A1ゴシック M JIS2004', 'sans-serif'],  
      },
    },
  },
  plugins: [],
} satisfies Config;
