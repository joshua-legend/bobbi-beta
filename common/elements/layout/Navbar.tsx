import styled from "styled-components";

interface Navbar{
    height?:number
}

export const Navbar = styled.header<Navbar>`
  width: 100%;
  height: ${props => props.height}px;
  color: ${props => props.theme.TYPOGRAPHY.COLOR.MAIN.PRIMARY};
  background: ${props => props.theme.BACKGROUND.BACKGROUND_COLOR.INFORMATION.PRIMARY};
`;