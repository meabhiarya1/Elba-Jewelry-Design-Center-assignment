import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        backgroundSecondary: "#F3F3F3",
        fontPrimary: "#000000",
        fontSecondary: "#979FA0",
        blue: "#009BE9",
        green: "#8CC928",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
