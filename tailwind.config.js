module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '450px',
          md: '768px',
          lg: '1024px',
          xl: '1264px',
        },
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "1rem",
        },
      },
      colors: {
        "primary": "#E7E7E7",
        "primary-2":"#4C1D95",
        "secondary": "#F0E9FC",
        "secondary-2": "#E3E4E6",
        "secondary-3":"#3f3d56"
      },
     padding: {
       'custom-top-1':'46px',
       'custom-top-2':'21px',
       'custom-bottom-1':'78px'
     },
      margin: {
        'custom-margin-top-1':'77px',
      },
      borderRadius: {
        'custom-radius':'10px',
        'custom-radius-2':'3px',
        'custom-radius-3':'30px'
      },
      fontSize: {
        'custom-size':'190px',
        'custom-size-2':'140px'
      },
      gap: {
        'custom-gap':'58px'
      },
      width: {
        'custom-width':'103px',
        'custom-width-1':'500px'
      },
      lineHeight: {
        'custom':'120%'
      },
      top: {
        'custom-top':'15px'
      },
    },
    fontFamily: {
      abc: ['Montserrat', 'sans-serif'],
      dfg: ['Rokkitt', 'sans-serif'],
    },
  },
};
