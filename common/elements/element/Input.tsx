import styled from "styled-components";

export const Input = styled.input.attrs(({ type }) => ({
    type:  type || "search"
}))`
`