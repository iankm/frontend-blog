module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 3px 16px rgba(0, 0, 0, 0.32)",
      neu: "-10px -10px 15px -3px rgba(255, 255, 255, 0.09), 0 -4px 6px -2px rgba(255, 255, 255, 0.045), 10px 10px 15px -3px rgba(0,0,0, 1), 0 4px 6px -2px rgba(0,0,0, 1)",
      smneu:
        "-2px -2px 15px -3px rgba(255, 255, 255, 0.09), 0 -1px 6px -1px rgba(255, 255, 255, 0.045), 2px 2px 15px -3px rgba(0,0,0, 1), 0 1px 6px -2px rgba(0,0,0, 1)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.06)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      focus: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      smooth:
        "inset 2px 2px 6px 0 rgba(100,100,100,.3), inset -2px -2px 6px 0 rgba(0,0,0,0.3),0 25px 50px -10px rgba(0,0,0,.3),0 8px 15px -8px rgba(0,0,0,.50)",
      green: "0 6px 34px rgba(58, 207, 192,  0.32)",
      smgreen: "0 3px 16px rgba(58, 207, 192,  0.32)",
      darkgreen: "0 6px 34px rgba(0, 118, 103,  0.32)",
      smdarkgreen: "0 3px 16px rgba(0, 118, 103,  0.32)",
    },
    colors: {
      transparent: "transparent",
      blacktransparent: "rgba(0,0,0,0.5)",
      black: {
        300: "#09060F",
        200: "#14161B",
        100: "#292B38",
      },
      white: "#fff",
      grey: {
        600: "#eeeeee", // change this soon
        500: "#444444",
        400: "#666666",
        300: "#888888",
        200: "#aaaaaa",
        100: "#cccccc",
      },
      pink: {
        200: "#ea2e69",
        100: "#f23f77",
      },
      blue: {
        300: "#1E213D",
        200: "#2058A4",
        100: "#3F8AEF",
      },
      green: {
        200: "#14A99A",
        100: "#3ACFC0",
      },
      yellow: {
        100: "#ECBB36",
        200: "#C29F3F",
      },
      discord: "#5865F2",
      red: "#f23f3f",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeInUp: "fadeInUp 0.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      fontFamily: {
        sans: ["Hellix", "Helvetica", "Arial", "sans-serif"],
        sansmed: ["Hellix-Medium", "Helvetica", "Arial", "sans-serif"],
        sanssemibold: ["Hellix-SemiBold", "Helvetica", "Arial", "sans-serif"],
        sansbold: ["Hellix-Bold", "Helvetica", "Arial", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
        height: "height",
        padding: "padding",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1536px",
    },
  },
  variants: {
    extend: {},
    fill: ["hover", "focus"],
    height: ["hover", "focus"],
    zIndex: ["hover", "active"],
    scrollbar: ["rounded"],
    shadow: ["hover"],
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
