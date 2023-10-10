/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': "#D1FAE5",
      'secondary': "#D1FAE5",
    }),
    extend: {},
  },
  plugins: [],
}

