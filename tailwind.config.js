/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#050816",
          light: "#ffffff"
        },
        secondary: {
          dark: "#aaa6c3",
          light: "#666666"
        },
        background: {
          dark: "#0a0a0f",
          light: "#ffffff"
        },
        card: {
          dark: "#1a1a2e",
          light: "#ffffff"
        },
        text: {
          dark: "#ffffff",
          light: "#1a1a1a"
        },
        accent: {
          dark: "#4f46e5",
          light: "#4338ca"
        }
      },
    },
  },
  plugins: [],
}
