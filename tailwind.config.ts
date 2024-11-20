import type { Config } from "tailwindcss";
import Preline from 'preline/plugin';

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
      },
    },
  },
  // XXX Commenting out this line prevents early exit when importing @/lib/tailwindConfig
  plugins: [Preline],
} satisfies Config;
