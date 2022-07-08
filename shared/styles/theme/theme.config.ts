import {DefaultTheme} from "styled-components";
import {COLORS, SVG, BOX} from "../global/global-variable";

export const theme: DefaultTheme = {
    TYPOGRAPHY:{
        FONT_SIZE:{},
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
        BORDER_HOVER: BOX.BORDER_HOVER
    },
    SVG:{
        SIZE:SVG.DEFAULT,
    },
};
