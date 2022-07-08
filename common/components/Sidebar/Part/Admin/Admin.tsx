import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Link from "next/link";
import {SideBarListItemIcon} from "../Common/SideBarListItemIcon";
import {SideBarListItemText} from "../Common/SideBarListItemText";

export default function Admin() {

    const adminObj = [
        {typo:"관리자 관리",icon:<SupervisorAccountIcon />,url:""},
    ]

    return (
        <List>
            {adminObj.map((obj, index) => (
                <Link key={index} href={obj.url}>
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <SideBarListItemIcon>{obj.icon}</SideBarListItemIcon>
                            <SideBarListItemText primary={obj.typo} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
    );
}