/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend : { 
      maxHeight: {
        '550px': '550px',
      },
    },
   
  },
  plugins: [],
};
