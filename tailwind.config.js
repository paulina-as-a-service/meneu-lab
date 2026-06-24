/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette, lifted directly from meneulab-estrategia.html
        plum: '#633058',
        'plum-200': '#e7b3df', // lighter plum for headings in dark mode
        pink: '#fb92ff',
        yellow: '#fff163',
        green: '#a3c14a',
        olive: '#5a6c37',
        ink: '#2c2630',
        muted: '#6f6678',
        'card-green': '#eef3df',
        'card-plum': '#f5ecf2',
        border1: '#e7dde7',
        border2: '#e4e9d6',
        // Dark theme tokens
        night: '#17121d', // page background
        'night-card': '#221b2a', // cards / surfaces
        'night-card2': '#2a2133', // tinted panels
        'night-border': '#372e42',
        'night-ink': '#f1e9f3', // primary text
        'night-muted': '#b4a8bf', // secondary text
      },
      fontFamily: {
        // Fredoka = display, Nunito = body (matches the deck)
        display: ['Fredoka', 'Trebuchet MS', 'sans-serif'],
        body: ['Nunito', 'Trebuchet MS', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        pill: '14px',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};
