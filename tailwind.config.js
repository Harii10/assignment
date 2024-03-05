export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        'white': '#ffffff',
        'zine':{
          10: '#38383880',
          20:'#0F2323',
          50 : '#191A19',
          100 : '#595959',
          200 : '#36A546',
          300 : '#00FF2580',
          400 : '#1A2C2C99',
          500 : '#1F191966',
          600 : '#4A494947',
          700 : '#36A546CC',
          800 : '#5E5E5E82',
          900 : '#36A54680',
        },
      },
    },
    
  },
  plugins: [],
}

