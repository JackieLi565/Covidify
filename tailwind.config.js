/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkGreen: "#344e41",
      lightGreen: "#3a5a40",
      pale: "#dad4c1",
    },
    backgroundImage: {
      paper: "url(../static/images/Paper.jpg);",
    },
  },
  plugins: [],
};
