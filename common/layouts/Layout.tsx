import styled from "styled-components";
import {ReactElement, ReactNode} from "react";

interface ILayout {
    children: ReactNode | ReactElement;
}

export const Layout = styled.div<ILayout>`
  width: 86vw;
`;

