import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        off_white: '#ffffe4'
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        kaoly: ["var(--font-kaoly)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
