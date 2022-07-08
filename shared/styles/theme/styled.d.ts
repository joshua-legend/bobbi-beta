import 'styled-components';
import {Degree, Gray, HeightWidth} from "../../../ts/types/typeAlias";

declare module 'styled-components' {
    export interface DefaultTheme {
        TYPOGRAPHY:{
            FONT_SIZE:{},
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
        }
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
            SIZE:HeightWidth,
        }
    }
}