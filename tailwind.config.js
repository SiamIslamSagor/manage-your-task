/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mob: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "dp-color": "#222831",
        "ds-color": "#393E46",
        "lp-color": "#00ADB5",
        "ls-color": "#EEEEEE",
      },
    },
  },
  plugins: [require("daisyui")],
};
