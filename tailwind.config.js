/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: '#008080',
        'secondary-dark': '#555',
        dark: '#0C0C0C',
        'secondary-white': 'rgba(255, 255, 255, 0.80)',
        'feature-bg': 'rgba(12, 133, 133, 0.06)',
      },
    },
  },
  plugins: [],
};
