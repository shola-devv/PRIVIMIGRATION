/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      colors:{
        brownbg:{
          100: "#49e695",
          200:"#49e695",
          300:"#52e635",
          400:"#49e695"
        },
        fontFamily:{
        firstFont: ['merriweather', 'serrif'],
        },
        borderRadius:{
        'curved': '2rem',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
