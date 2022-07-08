import styled from "styled-components";
import {Section} from "../../../../../elements/layout/Section";

export const TableSection = styled(Section)`
  thead
  {
    background-color: #3f87a6;
    color: #fff;
  }

  tbody {
    background-color: #e4f0f5;
  }

  table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: .8rem;
    width: 100%;
  }

  td, th {
    border: 1px solid rgb(190, 190, 190);
    padding: 5px 10px;
  }

  td {
    text-align: center;
  }

`;