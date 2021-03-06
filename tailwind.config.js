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
          DEFAULT: '#F6F8FA',
          darkMode: '#23292E',
        },
        textColor: '#9BA5B1',
        primary: '#343DEA',
        secondary: '#F36BC5',
        accent: {
          DEFAULT: '#FFFFFF',
          darkMode: '#141A1F',
        },
      },
    },
  },
  plugins: [],
};
