import styled from "styled-components";
import {ContainerCustom} from "../../../../../elements/layout/ContainerCustom";

export const SelectContainer = styled(ContainerCustom)`
    display: flex;
    max-width: 90%;
  
    & div {
      width:15%;
      margin-right: 20px;
    };
    & input{
      width: 30%;
    };

  
`