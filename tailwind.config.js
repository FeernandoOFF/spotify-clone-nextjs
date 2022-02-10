module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: {
          DEFAULT: '#F9F8FA',
          darkMode: '#23292E',
        },
        textColor: '#9BA5B1',
        primary: '#343DEA',
        secondary: '#F36BC5',
      },
    },
  },
  plugins: [],
};
