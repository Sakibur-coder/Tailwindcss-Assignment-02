/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      sms: '180px',
      sm2: '450px',
      sm: '560px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'main': '#F44335',
        'lemon': '#00FF84',
        'nevi-blue': '#2D3142',
        fontFamily: {
          'plus-jakarta': '"Plus Jakarta Sans", sans-serif',
          'poppins': '"Poppins", sans-serif'
        },
        backgroundImage:{
          'hero-bg': 'url(/images/hero-cover.png)'
        }
      },
    },
  },
  plugins: [],
}

