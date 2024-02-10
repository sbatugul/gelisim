import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      punch: {
        "50": "#fef3f2",
        "100": "#ffe2e1",
        "200": "#ffcbc8",
        "300": "#ffa6a2",
        "400": "#fd736c",
        "500": "#f5473e",
        "600": "#d9251c",
        "700": "#be1f17",
        "800": "#9d1d17",
        "900": "#821f1a",
        "950": "#470b08",
      },
      indigo: {
        "50": "#f3f3ff",
        "100": "#eae9fe",
        "200": "#d7d6fe",
        "300": "#b9b5fd",
        "400": "#978bfa",
        "500": "#745cf6",
        "600": "#623aed",
        "700": "#5328d9",
        "800": "#4521b6",
        "900": "#3a1d95",
        "950": "#281379",
      },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["light", "dark", "cupcake"] },
};
export default config;
