/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#d2f6f9',
          DEFAULT: '#1dd1e1',
          shock: '#0000ff',
        },
      },
    },
  },
  plugins: [],
};
