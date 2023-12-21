/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
