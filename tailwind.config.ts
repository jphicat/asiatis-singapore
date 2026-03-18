import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5b21b6',
          foreground: '#1e1b4b',
          secondary: '#f3f0ff',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        zh: ['"Noto Sans SC"', 'sans-serif']
      }
    },
  },
  plugins: [typography],
} satisfies Config;
