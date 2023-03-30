/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    screens: {
      'sm' : '500px',
      'md' : '769px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1440px',
    },
    extend: {
      colors: {
        'Orange': 'hsl(26, 100%, 55%)',
        'Pale-orange': 'hsl(25, 100%, 94%)',
        'Very-dark-blue': 'hsl(220, 13%, 13%)',
        'Dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'Grayish-blue': 'hsl(220, 14%, 75%)',
        'Light-grayish-blue': 'hsl(223, 64%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black': 'rgba(0, 0, 0, 0.75)',
        'A': 'hsl(228, 45%, 44%)'
      },
      fontFamily: {
        'body': ['Kumbh Sans', 'sans-serif']
      },
      backgroundColor: {
        'Orange': 'hsl(26, 100%, 55%)',
        'Pale-orange': 'hsl(25, 100%, 94%)',
        'Light-grayish-blue': 'hsl(223, 64%, 98%)',
        'Grayish-blue': 'hsl(220, 14%, 75%)',
        'White': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

