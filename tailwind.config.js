/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/phone.jpg')",
      },
      colors:{
        
        "pry":"#1cd45e",
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        basic:['Titillium Web', 'sans-serif']
      },
    },
  },
  plugins: [],
}
