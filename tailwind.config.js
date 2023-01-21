/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,tsx}',
    './components/**/*.{html,tsx}',
    './layout/**/*.{html,tsx}',
    './config/**/*.ts'
  ],
  theme: {
    fontFamily: {
      sans: ['MoscowSans', 'sans-serif'],
    },
    screens: {
      xxl: '1350px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      rating72: ['72px', '80px'],
      rating32: ['32px', '32px'],
      rating24: ['24px', '24px'],
      h1: ['40px', '44px'],
      h2: ['32px', '40px'],
      h3: ['24px', '32px'],
      // h4: '', // in globals.css
      h5: ['18px', '24px'],
      h6: ['17px', '22px'],
      text22: ['22px', '28px'],
      text20: ['20px', '24px'],
      text16: ['16px', '24px'],
      text14: ['14px', '18px'],
      caption14: ['14px', '18px'],
      caption12: ['12px', '16px'],
    },

    extend: {
      // minHeight: {
      //   "100vh": "var(--app-height)",
      //   "screen": "var(--app-height)"
      // },
      height: {
        "100vh": "var(--app-height)",
        "screen": "var(--app-height)"
      },
      animation: {
        fadein: 'fadein 0.2s ease',
        hovertranslate: 'hovertranslate 1s ease-in-out',
      },
      colors: {
        accentOrange: '#F74C25',
        accentPurple: '#4400CC',
        neutralDarkGrey: '#9E9E9E',
        neutralGrey: '#E2E2E2',
        neutralLightGrey: '#F6F6F6',
        neutralSmokeGrey: '#707070', // for input placeholder
        neutralDarkGreyHover: '#B8B8B8',
        systemSuccess: '#00AC3D',
        systemSuccessHover: '#1A9345',
      },
      keyframes: {
        fadein: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        hovertranslate: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
};
