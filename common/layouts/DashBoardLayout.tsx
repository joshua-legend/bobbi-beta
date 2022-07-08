import styled from "styled-components";
import {ReactElement, ReactNode} from "react";

interface ILayout {
    children: ReactNode | ReactElement;
}

export const DashBoardLayout = styled.div<ILayout>`
  width: 100vw;
`;

