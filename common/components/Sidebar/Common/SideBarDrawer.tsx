import {Drawer} from "@mui/material";
import {
    styled,
    createTheme,
    ThemeProvider,
    experimental_sx as sx, width,
} from '@mui/system';

export const SideBarDrawer = styled(Drawer)({
    width: "240px",
    '& .MuiDrawer-paper': {
        width: "240px",
    },
    variant:"permanent",
    anchor:"left",
})

