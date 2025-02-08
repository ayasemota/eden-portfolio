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
        brown: "#444",
        blue: "#00F",
      },
      boxShadow: {
        one: '0px 4px 50px 0px rgba(0, 0, 0, 0.10)',
      },
      backgroundImage: {
        one: 'linear-gradient(90deg, #00F 0%, #90F 100%)',
      },
      fontFamily: {
        neue: ["Neue Machina", "sans-serif"],
        tight: ["Inner Tight", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        ultrabold: "800", 
      },
      fontSize: {
        sm: "15px",
        md: "20px",
        lg: "24px",
        xl: "40px",
      },
      animation: {
        gradientMove: "gradientMove 5s infinite linear alternate",
      },
      keyframes: {
        gradientMove: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
