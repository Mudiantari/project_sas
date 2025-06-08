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
           },
    },
  },
  plugins: [],
}

