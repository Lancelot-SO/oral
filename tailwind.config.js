/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'msm': '360px',
        'xxsm': '390px',
        'xsm': '375px',
        'vsm': '393px',
        'rsm': '412px',
        'nsm': '414px',
        'small': '430px',
        'tablet': '570px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'large': '1343px',
        '2xl': '1536px',
        'xxl': '1620px',
        'vl': '1728px',
        '3xl': '1800px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
}