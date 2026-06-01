/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050607',
        panel: '#0f1210',
        signal: '#f88610',
        phosphor: '#5dff9f',
        muted: '#91a39a'
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        signal: '0 0 48px rgba(248, 134, 16, 0.35)',
        phosphor: '0 0 48px rgba(93, 255, 159, 0.25)'
      }
    }
  },
  plugins: []
};
