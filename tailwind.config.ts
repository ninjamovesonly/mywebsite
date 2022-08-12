/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  content: [
    './pages/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      themeColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
      },
    },
  },
  plugins: [],
};
