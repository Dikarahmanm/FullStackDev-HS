/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        ingreen: "#10ad8e",
        inblue: "#0139de",
      },
    },
  },
  plugins: [],
};
