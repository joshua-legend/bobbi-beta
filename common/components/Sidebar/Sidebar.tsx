import {Drawer} from "@mui/material";
import {Admin} from "./Part/Admin/Admin";
import {Member} from "./Part/Member/Member";
import {Logo} from "./Part/Logo/Logo";
import {Contents} from "./Part/Contents/Contents";


export const Sidebar = () => {

    const WIDTH = 240;

    return (
        <Drawer
            sx={{width: WIDTH, '& .MuiDrawer-paper': {width: WIDTH}}}
            variant="permanent"
            anchor="left"
        >
            <Logo />
            <Contents />
            <Member />
            <Admin />
        </Drawer>
    );
}