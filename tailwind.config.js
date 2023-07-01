import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,astro}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Poppins', ...defaultTheme.fontFamily.sans],
        'ibm-plex-sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
