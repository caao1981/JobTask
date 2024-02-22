const primary = '#E85451'
const secondary = '#37474F'
const success = '#27AE60'
const warning = '#E2B93B'
const error = '#C94444'
const grey1 = '#737678'
const grey2 = '#BBBBBB'
const grey3 = '#F2F2F2'
const white = '#FFFFFF'

export const getDesignTokens = (mode) => ({
  palette: {
    mode: mode,
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    common: {
      black: secondary,
      white: white,
    },
    error: {
      main: error,
    },
    warning: {
      main: warning,
    },
    info: {
      main: grey1,
    },
    success: {
      main: success,
    },
    text: {
      primary: secondary,
    },
    grey: {
      A100: grey1,
      A200: grey2,
      A300: grey3,
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif;',
    h1: {
      fontWeight: '600',
      fontSize: '50px',
    },
    h2: {
      fontWeight: '600',
      fontSize: '36px',
      lineHeight: '54px',
    },
    h4: {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '30px',
    },
    h5: {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '22px',
    },
    h6: {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '28px',
    },
    logo1: {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '20.8px',
    },
    logo2: {
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '20.8px',
    },
    body1: {
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.7',
    },
    body2: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.7',
    },
    body3: {
      fontWeight: '400',
      fontSize: '15px',
      lineHeight: '23.8px',
    },
    body4: {
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '23.8px',
    },
    title1: {
      fontWeight: '600',
       fontSize: '24px',
      lineHeight: '38px',
    },
    subtitle1: {
      fontWeight: '600',
      fontSize: '11px',
      lineHeight: '19px',
    },
    subtitle2: {
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '30px',
    },
    subtitle3: {
      fontWeight: '400',
      fontSize: '17px',
      lineHeight: '30px',
    },
    caption1: {
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '25.2px',
    },
    caption2: {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '21.6px',
    },
    caption3: {
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '17px',
    },
    caption4: {
      fontWeight: '400',
      fontSize: '11.64px',
      lineHeight: '19.8px',
    },
     caption5: {
      fontWeight: '400',
      fontSize: '10px',
      lineHeight: '16.7px',
    },
    caption7: {
      fontWeight: '600',
      fontSize: '13px',
      lineHeight: '22.5px',
    },
    caption8: {
      fontWeight: '400',
      fontSize: '13px',
      lineHeight: '22.5px',
    },
    responiveCaption: {
      fontWeight: '600',
      fontSize: '10px',
      lineHeight: '15px',
    },
    tag1: {
      fontWeight: '400',
      fontSize: '7.47905px',
      lineHeight: '12px',
    },
    tag2: {
      fontWeight: '400',
      fontSize: '9.83px',
      lineHeight: '17px',
    },

    //H-1 (Custom) 34.11px
    h1New: {
      fontWeight: '600',
      fontSize: '2.46rem',
      lineHeight: '1.7',
    },
    //H0 (Custom) 29.4px
    h2New: {
      fontWeight: '600',
      fontSize: '2.1rem',
      lineHeight: '1.7',
    },
    //H1 25.35px
    h3New: {
      fontWeight: '600',
      fontSize: '1.811rem',
      lineHeight: '1.7',
    },
    //H2 21.85px
    h4New: {
      fontWeight: '600',
      fontSize: '1.561rem',
      lineHeight: '1.7',
    },
    //H3 18.84px
    h5New: {
      fontWeight: '600',
      fontSize: '1.346rem',
      lineHeight: '1.7',
    },
    //H4 16.24px
    h6New: {
      fontWeight: '600',
      fontSize: '1.16rem',
      lineHeight: '1.7',
    },
    //Body Normal - B (Base) (H5) 14px
    subtitle1New: {
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.7',
    },
    //Body Normal - R (Base) (H5) 14px
    subtitle2New: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.7',
    },
    //Body Small - B (H6) 12.07px
    body1New: {
      fontWeight: '600',
      fontSize: '0.862rem',
      lineHeight: '1.7',
    },
    //Body Small - R (H6) 12.07px
    body2New: {
      fontWeight: '400',
      fontSize: '0.862rem',
      lineHeight: '1.7',
    },
    button: {
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.7',
    },
    //Captions 10.4px
    captionNew: {
      fontWeight: '400',
      fontSize: '0.743rem',
      lineHeight: '1.7',
    },
    //caption 8.1px
    caption2New: {
      fontWeight: '400',
      fontSize: '0.579rem',
      lineHeight: '1.143',
    },
  },
})
