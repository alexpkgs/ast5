/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Google Sans", "ui-sans-serif", "system-ui"],
      mono: ["Iosevka", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        darker: "#020202",
        bg: "#000",
        mbg: "#090909",
        bg3: "#181818",
        fg: "#efeeee",
        bright: "#bab8b8",
        error: "#c14d53",
        success: "#56966e",
        warn: "#e1956c",
        primary: "#6e95bd",
        disabled: "#d466e9",
        secondary: "#6a9f98",
        muted: "#a1a1a1",
        foreground: "#ffffff",
        surface: {
          1: "#121212",
          2: "#1f1f1f",
        },
        background: {
          1: "#1f1f1f",
          2: "#2e2e2e",
        },
        contrast: "#ffffff",
      },
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        14: "3rem",
      },
      height: {
        fuller: "140vh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
