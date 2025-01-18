/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--navy) / <alpha-value>)",
        cream: "#efe8d4",
        pink: "rgb(var(--pink) / <alpha-value>)",
      },
    },
  },
}

