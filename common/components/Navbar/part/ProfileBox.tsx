import styled from "styled-components";
import {BoxDel} from "../../../elements/element/BoxDel";


export const ProfileBox = styled(BoxDel)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20vw;

  font-family: 'Inter', sans-serif;
  font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.DESKTOP.H4};
    
  & svg {
    height: ${props => props.theme.SVG.HEIGHT_LARGE};
  }
`;

