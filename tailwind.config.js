/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#333333',
        'back':'#e6e4e2',
        'menu':'#f2efed',
        'hero':'#f4f4f4',
        'blue':'#0077b3',
        'blues':'#3b83b7',
        'orange':'#cd4404',
        'orange-dot':"#e8692d",
        'orange-fade':"#fcd3b6",
        'vert':"#008053",
        'violet':"#72619c"
      },
    },
  },
  plugins: [],
}
