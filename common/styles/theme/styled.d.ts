import 'styled-components';

type Degree = {
    PRIMARY: string,
    SECONDARY:string,
    TERTIARY:string,
    QUATERNARY:string,
    QUINARY:string,
};
type Gray = {
    HEADLINE: string,
    SUBHEAD: string,
    BODY: string,
    TEXT: string,
    TEXT_SECONDARY: string,
    LINK: string,
    DIVIDER: string,
    FOOTNOTE: string,
    CAPTION: string,
    CONTENT: string,
    BACKGROUND: string,
    HOVER: string,
};

declare module 'styled-components' {
    export interface DefaultTheme {
        TYPOGRAPHY:{
            FONT_SIZE:{
                MOBILE: {
                    H1:string,
                    H2:string,
                    H3:string,
                    H4:string,
                    H5:string,
                    H6:string,
                },
                TABLETS: {
                    H1:string,
                    H2:string,
                    H3:string,
                    H4:string,
                    H5:string,
                    H6:string,
                },
                LAPTOP:{
                    H1:string,
                    H2:string,
                    H3:string,
                    H4:string,
                    H5:string,
                    H6:string,
                }
                DESKTOP: {
                    H1:string,
                    H2:string,
                    H3:string,
                    H4:string,
                    H5:string,
                    H6:string,
                },
            },
            FONT_FAMILY:{},
            FONT_WEIGHT:{},
            LINE_HEIGHT:{},
            COLOR:{
                MAIN:Degree;
                GRAY:Gray;
                INFORMATION:Degree;
                SUCCESS:Degree;
                WARNING:Degree;
                ERROR:Degree;
            }
        },
        BACKGROUND:{
            BACKGROUND_COLOR:{
                MAIN:Degree;
                GRAY:Gray;
                INFORMATION:Degree;
                SUCCESS:Degree;
                WARNING:Degree;
                ERROR:Degree;
            },
            CURSOR:{},
        }
        BOX_MODEL: {
            BORDER_RADIUS: string,
            BORDER_HOVER: string,
        }
        SVG: {
            HEIGHT_LARGE:string,
            HEIGHT_MEDIUM:string,
            HEIGHT_SMALL:string,
        }
    }
}