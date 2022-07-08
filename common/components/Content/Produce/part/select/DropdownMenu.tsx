import styled from "styled-components";

interface IDropdownMenu {
    hide:boolean
}

export const DropdownMenu = styled.div<IDropdownMenu>`
  position: absolute;
  width: 15rem;
  
  & div{
    background-color: ${props => props.theme.BACKGROUND.BACKGROUND_COLOR.INFORMATION.TERTIARY};
    display: ${props => props.hide ? "flex" : "none"};
    padding: 1rem;
  }
`
