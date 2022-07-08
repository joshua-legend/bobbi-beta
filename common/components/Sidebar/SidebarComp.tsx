import {Drawer} from "@mui/material";
import Logo from "./Part/Logo/Logo";
import Contents from "./Part/Contents/Contents";
import Member from "./Part/Member/Member";
import Admin from "./Part/Admin/Admin";


export default function SidebarComp() {

    const WIDTH = 240;

    return (
        <Drawer
            sx={{
                width: WIDTH,
                '& .MuiDrawer-paper': {
                    width: WIDTH,
                },
            }}
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