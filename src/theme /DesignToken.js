const primary = "#3B98D4";
const secondary = "#37474F";
const success = "#59C36A";
const warning = "#E2B93B";
const error = "#FF6A66";
const grey1 = "#737678";
const grey2 = "#BBBBBB";
const grey3 = "#F2F2F2";
const grey4 = "#898A8D";
const white = "#FFFFFF";
const fontColor = "#23496B";
export const infoPagesBackground = "#E8E8E8";

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
      primary: fontColor,
    },
    grey: {
      A100: grey1,
      A200: grey2,
      A300: grey3,
      A400: grey4,
    },
    // add custom colors here
    customColors: {
      authBackground: "#FAFAFA",
      mainAppBehindBackground: "#F5F6FF",
      mainAppFacingBackground: "#FFFFFF",
      headingColor: "#2B395B",
      linkColor: "#3B98D4",
      subtitleTextLightGrey: "#929EBA",
      lightText: "#B5B5BB",
      statusActive: "#5B93FF",
      chatIconPrimaryLight: "#9AD6FB",
    },
  },
  typography: {
    fontFamily: '"Ubuntu","Poppins", sans-serif;',
    // insert custom theme options here
    body: {
      fontSize: "14px",
      fontWeight: "400",
    },
    bodySmall: {
      fontSize: "12px",
      fontWeight: "400",
    },
    bodySlightlyBold: {
      fontSize: "14px",
      fontWeight: "500",
    },
    bodyFocused: {
      fontSize: "16px",
      fontWeight: "500",
    },
    authPageHeading: {
      fontWeight: "700",
      fontSize: "28px",
      lineHeight: "31.17px",
    },
    authPageSubtitle: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
    },
    mainPageHeading: {
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "43.66px",
    },
    lightHeading: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "27.58px",
    },
    boldHeading: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "27.58px",
    },
    semiLightHeading: {
      fontWeight: 400,
      fontSize: "20px",
    },
    pageSubHeading: {
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "34.47px",
    },
    cardHeading: {
      fontWeight: 500,
      fontSize: "22px",
    },

    boldText: {
      fontWeight: 700,
      fontSize: "16px",
    },
    labelText: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "18.38px",
    },
    chatWindowHeading: {
      fontWeight: 500,
      fontSize: "26px",
    },
  },
});
