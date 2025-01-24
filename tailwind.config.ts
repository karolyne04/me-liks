import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        primary: "#FF1E56",
        backHabilities: '#ff1e56b3',
        secondary: '#F72C5B',
        tertiary: '#FF8383',
        quaternary: '#C30E59'
      },
    },
  },
  plugins: [],
} satisfies Config;
