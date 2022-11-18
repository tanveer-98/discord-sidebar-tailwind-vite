// import {} from './src/assets/background.jpg'
module.exports = {
  darkMode : "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    
    screens: {
      xsm: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      trispace :['Trispace', 'sans-serif'],
      abril:['Abril Fatface','cursive']

    },
  
    extend: {
      // backgroundImage: {
      //   'coffee': "url('./src/assets/background.jpg')",
      //   // 'footer-texture': "url('/img/footer-texture.png')",
      // },
      colors:{
        primary:' #202225',
        secondary : '#5865f2',
        gray:{
          900:'#202225',
          800:'#2f3136',
          700:'#36393f',
          600:'#4f545c',
          400:'#d4d7dc',
          300:'#e3e5e8',
          200:'#ebedef',
          100:'#f2f3f5'
        }

      },
      spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
        ,
        boxShadow:{
          'neon': '0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 40px #2196f3'
        }
    },
    
    
  },
  plugins: [
      require('tw-elements/dist/plugin'),
      require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}