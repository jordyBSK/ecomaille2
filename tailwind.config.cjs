/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#131517",

          secondary: "#262B2F",

          accent: "#c4bbf7",

          neutral: "#201C31",

          "base-100": "#ffffff",

          info: "#71C6F4",

          success: "#5AD8AE",

          warning: "#F78008",

          error: "#F52E3B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
