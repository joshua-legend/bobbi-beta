import {DefaultTheme} from "styled-components";
import {BOX, COLORS, DEVICE, SVG} from "../global/global-variable";

export const DarkTheme: DefaultTheme = {
    TYPOGRAPHY:{
        FONT_SIZE:{
            MOBILE: {
                H1:`28px`,
                H2:`24px`,
                H3:`20px`,
                H4:`16px`,
                H5:`14px`,
                H6:`14px`,
            },
            TABLETS: {
                H1:`32px`,
                H2:`24px`,
                H3:`20px`,
                H4:`16px`,
                H5:`14px`,
                H6:`12px`,
            },
            LAPTOP: {
                H1:`40px`,
                H2:`34px`,
                H3:`28px`,
                H4:`22px`,
                H5:`18px`,
                H6:`14px`,
            },
            DESKTOP: {
                H1:`54px`,
                H2:`46px`,
                H3:`38px`,
                H4:`24px`,
                H5:`22px`,
                H6:`18px`,
            },
        },
        FONT_FAMILY:{},
        FONT_WEIGHT:{},
        LINE_HEIGHT:{},
        COLOR:{
            MAIN: COLORS.MAIN,
            GRAY: COLORS.GRAY,
            INFORMATION: COLORS.INFORMATION,
            SUCCESS: COLORS.SUCCESS,
            WARNING: COLORS.WARNING,
            ERROR: COLORS.ERROR,
        }
    },
    BACKGROUND:{
        BACKGROUND_COLOR:{
            MAIN: COLORS.MAIN,
            GRAY: COLORS.GRAY,
            INFORMATION: COLORS.INFORMATION,
            SUCCESS: COLORS.SUCCESS,
            WARNING: COLORS.WARNING,
            ERROR: COLORS.ERROR,
        },
        CURSOR:{},
    },
    BOX_MODEL: {
        BORDER_RADIUS: BOX.BORDER_RADIUS,
    },
    SVG:{
        HEIGHT_LARGE:SVG.LARGE,
        HEIGHT_MEDIUM:SVG.MEDIUM,
        HEIGHT_SMALL:SVG.SMALL,
    },
};