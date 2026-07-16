/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#001208',
          deepGreen: '#022113',
          emerald: '#ccf15a',
          emeraldHover: '#b0d440',
          emeraldText: '#161e00',
          mint: '#a6d0b5',
          neonMint: '#6dfe9c',
          borderGreen: '#112f21',
          lightGreen: '#062517',
          darkBg: '#00180c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
