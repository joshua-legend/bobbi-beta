import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Container} from "@mui/material";

export const ButtonContainer = styled(Container)`
    display: flex;
    justify-content: flex-end;
    > button {
      margin: 2.5rem 1rem
    }
`;