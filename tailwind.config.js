/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,php}"],
  theme: {
    extend: {
      screens: {
                'xs': '300px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                '3xl': '1610px',
                '4xl': '2500px',
            },
            fontFamily: {
                'poppins': ['Poppins'],
                'mada': ['Mada'],
           },
           colors: {
                'custom1': '#FCFCFC',
                'custom2': '#06486E',
                'custom3': '#222222',
                'custom4': '#3D3D3D',
                'custom5': '#CDCDCD',
                'custom6': '#F5F5F5',
                'custom7': '#14AE5C',
                'custom8': '#A1A0A0',
                'custom9': '#464646',
                'custom10': '#50EC5B',
                'custom11': '#F65867',
           },
    },
  },
  plugins: [],
}

