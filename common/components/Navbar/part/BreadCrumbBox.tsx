import styled from "styled-components";
import {Box} from "../../../elements/element/Box";


export const BreadCrumbBox = styled(Box)`
    display: flex;
    align-items: center;

    font-family: 'Inter', sans-serif;
    font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.DESKTOP.H4};
    
    & svg {
      height: ${props => props.theme.SVG.HEIGHT_LARGE};
    }
`;

