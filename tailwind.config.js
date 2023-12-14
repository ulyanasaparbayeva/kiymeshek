module.exports = {
  content: [
    "./src/**/*.pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
        "primary-2":"rgba(110, 110, 110, 0.84)",
        "secondary": "#F0E9FC",
        "secondary-2": "#E3E4E6",
        "secondary-3":"#FC0",
        "secondary-4":"#858585",
        "secondary-5":"rgba(0, 0, 0, 0.84)",
        "secondary-6":"#33B6EE",
        "secondary-7":"#F7F7F7",
        "secondary-8":"rgba(0, 0, 0, 0.84)",
        "secondary-9":"#FBE04B"
      },
     padding: {
        'customs-padding':'53px',
       'custom-top-1':'46px',
       'custom-top-2':'21px',
       'custom-top':'215px',
       'custom-top-3':'27px',
       'custom-top-4':'18px',
       'custom-top-5':'37px',
       'custom-top-6':'19px',
       'custom-top-7':'26px',
       'custom-top-8':'60px',
       'custom-top-9':'35px',
       'custom-top-10':'83px',
       'custom-top-11':'63px',
       'custom-top-11':'72px',
       'custom-bottom-1':'78px',
       'customs-bottom':'214px',
       'custom-bottom-3':'21px',
       'custom-bottom-4':'37px',
       'custom-padding':'18px',
     },
      margin: {
        'custom-margin-top-1':'77px',
        'custom-margin-top-2':'215px',
        'custom-margin-top-3':'17px',
        'custom-margin-top-34':'52px',
      },
      borderRadius: {
        'custom-radius':'10px',
        'custom-radius-2':'3px',
        'custom-radius-3':'30px',
        'custom-radius-4':'20px',
        'custom-radius-5':'13px',
        'custom-radius-6':'15px'
      },
      fontSize: {
        'custom-size':'190px',
        'custom-size-2':'140px',
        'custom-size-3':'33.321px',
        'custom-size-4':'19.437px',
        'custom-size-45':'25px',
        'custom-size-6':'40px'
      },
      gap: {
        'custom-gap':'58px'
      },
      height: {
        'custom-height':'90px',
        'custom-height-1':'67px',
        'custom-height-2':'285px'
      },
      width: {
        'custom-width':'103px',
        'custom-width-1':'500px',
        'custom-width-2':'560px',
        'custom-width-3':'957px',
        'custom-width-4':'329px',
        'custom-width-5':'760px',
        'custom-width-6':'86px',
        'custom-width-7':'600px'
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
      opk: ['Roboto', 'sans-serif'],
    },
  },
};
