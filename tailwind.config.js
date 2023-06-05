/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
          // Simple 16 column grid
          '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
  plugins: [],
}
}
