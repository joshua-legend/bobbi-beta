import MakeMenuList from "./part/menu/MakeMenuList";
import {SidebarAside} from "./part/SidebarAside";
import {MENU_ITEMS} from "../../../util/constants/menu-items";
import {LogoContainer} from "./part/logo/LogoContainer";
import {LogoBox} from "./part/logo/LogoBox";
import {MenuContainer} from "./part/menu/MenuContainer";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";


export default function SidebarComp() {
    const drawerWidth = 240;
    return (
        // <SidebarAside>
        //     <LogoContainer size={"fluid"}>
        //         <LogoBox>BOBBI Admin</LogoBox>
        //     </LogoContainer>
        //     <MenuContainer size={"fluid"}>
        //         <MakeMenuList options={MENU_ITEMS} />
        //     </MenuContainer>
        // </SidebarAside>
        <Drawer
            sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}