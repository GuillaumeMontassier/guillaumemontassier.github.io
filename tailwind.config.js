module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        linkedin: "#0a66c2",
        main_blue: "#143642",
        main_red: "#a72232",
        main_white: "#dad2d8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
