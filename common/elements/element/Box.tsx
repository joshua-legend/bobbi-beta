import styled from "styled-components";
import {DEVICE} from "../../styles/global/global-variable";

/*
* The Box component serves as a wrapper component for most of the CSS utility needs.
* A white box to contain other elements
* */

type sizeText = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';


interface Box {
    cursorable?: boolean,
    size?: sizeText,
}

const fontChanger =  (props,query) =>{
    switch (props.size) {
        case "H1" : return `${props.theme.TYPOGRAPHY.FONT_SIZE[query][props.size]}`;
        case "H2" : return `${props.theme.TYPOGRAPHY.FONT_SIZE[query][props.size]}`;
        case "H3" : return `${props.theme.TYPOGRAPHY.FONT_SIZE[query][props.size]}`;
        case "H4" : return `${props.theme.TYPOGRAPHY.FONT_SIZE[query][props.size]}`;
        case "H5" : return `${props.theme.TYPOGRAPHY.FONT_SIZE[query][props.size]}`;
        case "H6" : return `${props.theme.TYPOGRAPHY.FONT_SIZE[query][props.size]}`;
    }
}


export const Box = styled.div<Box>`
  cursor: ${props => props.cursorable ? `pointer` : undefined};
  font-size: ${props=> fontChanger(props,'DESKTOP')};
  & svg {
    height: ${props => props.theme.SVG.HEIGHT_MEDIUM};
  }

  @media ${DEVICE.LAPTOP_L} {
    font-size: ${props=> fontChanger(props,'LAPTOP')};
  }
  @media ${DEVICE.TABLET} {
    font-size: ${props=> fontChanger(props,'TABLETS')};
  }
  @media ${DEVICE.MOBILE_L} {
    font-size: ${props=> fontChanger(props,'MOBILE')};
  }
`;

