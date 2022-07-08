import styled from "styled-components";
import {WIDTH} from "../../styles/global/global-variable";

/*
* Container
* A simple container to center your content horizontally
* */

type size = 'xs'| 'sm'| 'md'| 'lg'| 'xl'| 'xxl' | 'fluid';
interface Container {
    size:size
}

export const ContainerCustom = styled.div<Container>`
    width: 100%;
    max-width: ${props=> props.size ? WIDTH[props.size] : undefined};
    margin-right: auto;
    margin-left: auto;
`;

