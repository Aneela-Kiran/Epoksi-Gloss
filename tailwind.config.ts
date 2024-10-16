import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': "#0F3B40",
        foreground: "var(--foreground)",
      },
      underlineOffset:{
        'custom' : '16px'
      }
    },
  },
  plugins: [],
};
export default config;
