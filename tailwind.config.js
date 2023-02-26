/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "fly-dark-grey": "#232324",
        "fly-grey": "#a0a1a1",
        "fly-light-grey": "#eeeeee",
        "fly-2x-light-grey": "#f5f5f5",
      },
    },
    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
    // screens: {
    //   sm: { min: "320px", max: "767px" },
    //   md: { min: "768px", max: "1023px" },
    //   lg: { min: "1024px", max: "1279px" },
    //   xl: { min: "1280px", max: "1535px" },
    //   "2xl": { min: "1536px" },
    // },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
