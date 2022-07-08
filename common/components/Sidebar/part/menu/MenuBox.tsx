import styled from "styled-components";
import {Box} from "../../../../elements/element/Box";

export const MenuBox = styled(Box) <{ depth: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0px 10px 10px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    background-color: #f44336;
    color: white;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({depth}) => `${depth}rem`};
    color: #ffffff;
  }

  &.selected {
    border-top-right-radius: ${props => props.theme.BOX_MODEL.BORDER_RADIUS};
    border-bottom-right-radius: ${props => props.theme.BOX_MODEL.BORDER_RADIUS};
    background-color: #DC3545;
    color: #fff;
  }
`;