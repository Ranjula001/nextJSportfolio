import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      lineHeight: {
        'none': '1', // Default for `leading-none`
        'zero6': '0.66', // Custom `line-height: 0`
        'zero': '0.9',
      },
      fontFamily:{
        drukTrial: ["Druk Trial", "sans-serif"],
        drukTextTrial: ["Druk Text Trial", "sans-serif"],
        drukTextWideTrial: ["Druk Text Wide Trial", "sans-serif"],
        drukWideTrial: ["Druk Wide Trial", "sans-serif"],
        drukCondTrial: ["Druk Cond Trial", "sans-serif"],
        drukXCondTrial: ["Druk XCond Trial", "sans-serif"],
        drukXXCondTrial: ["Druk XXCond Trial", "sans-serif"],
        handWritten: ["Handwriting", "sans-serif"],
        geostar: ["Geostar Fill", "serif"],
        maelstrom: ["Maelstrom", "serif"],
        migraExtrabold: ["Migra-Extrabold", "serif"],
        migraExtralight: ["Migra-Extralight", "serif"],
        taskerGrotesk:["Tusker-Grotesk", "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
