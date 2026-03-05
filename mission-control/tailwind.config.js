/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'paper': '#faf8f5',
        'paper-dark': '#f5f0e8',
        'ink': '#2c241b',
        'ink-light': '#5a4d3d',
        'accent': '#c9a227',
        'accent-warm': '#d4a574',
        'success': '#5a7d5a',
        'warning': '#c9a227',
        'info': '#6b7b8c',
      },
      boxShadow: {
        'newspaper': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'newspaper-lg': '0 4px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
      }
    },
  },
  plugins: [],
}
