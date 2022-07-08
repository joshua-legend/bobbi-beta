import styled from "styled-components";

/*
* Section
* A simple container to divide your page into sections, like the one you’re currently reading
* */

type paddingStyle = 'sm'| 'md'| 'lg' ;

interface Section {
    padding?:paddingStyle
}

export const Section = styled.section<Section>`
  width:100%;
`;