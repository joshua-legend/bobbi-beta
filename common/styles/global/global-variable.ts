export const COLORS = {
  GRAY: {
    HEADLINE: `#212529`,
    HOVER: `#212529`,
    SUBHEAD: `#28323C`,
    BODY: `#343A40`,
    TEXT: `#343A40`,
    TEXT_SECONDARY: `#495057`,
    LINK: `#495057`,
    DIVIDER: `#495057`,
    FOOTNOTE: `#646F7C`,
    CAPTION: `#646F7C`,
    CONTENT: `#FAF9F8`,
    BACKGROUND: `#EFEFF4`,
  },
  MAIN:{
    PRIMARY:`#7F56D9`,
    SECONDARY:`#9E77ED`,
    TERTIARY:`#B692F6`,
    QUATERNARY:`#D6BBFB`,
    QUINARY:`#E9D7FE`,
  },
  INFORMATION:{
    PRIMARY:`#1570EF`,
    SECONDARY:`#2E90FA`,
    TERTIARY:`#53B1FD`,
    QUATERNARY:`#84CAFF`,
    QUINARY:`#B2DDFF`,
  },
  SUCCESS:{
    PRIMARY:`#039855`,
    SECONDARY:`#12B76A`,
    TERTIARY:`#32D583`,
    QUATERNARY:`#6CE9A6`,
    QUINARY:`#A6F4C5`,
  },
  WARNING:{
    PRIMARY:`#DC6803`,
    SECONDARY:`#F79009`,
    TERTIARY:`#FDB022`,
    QUATERNARY:`#FEC84B`,
    QUINARY:`#FEDF89`,
  },
  ERROR:{
    PRIMARY:`#D92D20`,
    SECONDARY:`#F04438`,
    TERTIARY:`#F97066`,
    QUATERNARY:`#FDA29B`,
    QUINARY:`#FECDCA`,
  },
}

export const SIZES = {
  MOBILE_S: '320px',
  MOBILE_M: '375px',
  MOBILE_L: '425px',
  TABLET: '768px',
  LAPTOP: '1024px',
  LAPTOP_L: '1440px',
  DESKTOP: '2560px',
};

export const WIDTH = {
  xs: `320px`,
  sm: `480px`,
  md: `600px`,
  lg: `768px`,
  xl: `900px`,
  xxl: `1024px`,
  xxxl: `1400px`,
  fluid: `100%`,
}


export const DEVICE = {
  MOBILE_S: `(max-width: ${SIZES.MOBILE_S})`,
  MOBILE_M: `(max-width: ${SIZES.MOBILE_M})`,
  MOBILE_L: `(max-width: ${SIZES.MOBILE_L})`,
  TABLET: `(max-width: ${SIZES.TABLET})`,
  LAPTOP: `(max-width: ${SIZES.LAPTOP})`,
  LAPTOP_L: `(max-width: ${SIZES.LAPTOP_L})`,
  DESKTOP: `(max-width: ${SIZES.DESKTOP})`,
}

export const PADDING = {
  sm: `3rem`,
  md: `6rem`,
  lg: `12rem`,
}

export const SVG ={
  LARGE:`40px`,
  MEDIUM:`25px`,
  SMALL:`18px`,
}

export const BOX = {
  BORDER_RADIUS:`20px`,
  BORDER_HOVER: `1px solid ${COLORS.SUCCESS.PRIMARY}`
}


