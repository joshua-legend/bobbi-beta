import styled from "styled-components";

interface Button {
    outline?:boolean
    primary?:boolean
    light?:boolean
}

export const Button = styled.button<Button>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border:none;
  width: 100%;
  padding: 1rem;
  
  &:hover{
    border: ${props => props.theme.BOX_MODEL.BORDER_HOVER};
  }
`;
