/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E2A5E',
        secondary: '#EEF1F7',
        accent: '#A7B5FF',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

