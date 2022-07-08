import styled from "styled-components";

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
    margin-right: auto;
    margin-left: auto;
`;

