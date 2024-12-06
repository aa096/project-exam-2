/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        error: "#F3676A",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "500px",
      },
      boxShadow: {
        "custom-card": "0px 20px 10px 0px rgba(0, 0, 0, 0.09)",
      },
      lineClamp: {
        8: "8",
      },
    },
    plugins: [],
  },
};
