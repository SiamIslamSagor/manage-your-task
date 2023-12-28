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

        // Additional Custom Colors
        "ocean-breeze-1": "#007BFF",
        "ocean-breeze-2": "#00BFFF",
        "ocean-breeze-3": "#87CEFA",
        "ocean-breeze-4": "#B0E0E6",
        "ocean-breeze-5": "#ADD8E6",

        "minty-fresh-1": "#00FF00",
        "minty-fresh-2": "#98FB98",
        "minty-fresh-3": "#00FA9A",
        "minty-fresh-4": "#2E8B57",
        "minty-fresh-5": "#3CB371",

        "sunset-vibes-1": "#FF4500",
        "sunset-vibes-2": "#FF6347",
        "sunset-vibes-3": "#FF7F50",
        "sunset-vibes-4": "#FFA07A",
        "sunset-vibes-5": "#FA8072",

        "elegant-grayscale-1": "#333333",
        "elegant-grayscale-2": "#666666",
        "elegant-grayscale-3": "#999999",
        "elegant-grayscale-4": "#CCCCCC",
        "elegant-grayscale-5": "#FFFFFF",

        "nature-inspired-1": "#8B4513",
        "nature-inspired-2": "#228B22",
        "nature-inspired-3": "#CD853F",
        "nature-inspired-4": "#6B8E23",
        "nature-inspired-5": "#2F4F4F",
      },
    },
  },
  plugins: [require("daisyui")],
};
