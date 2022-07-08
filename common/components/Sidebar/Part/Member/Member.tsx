import {Divider, List, ListItem, ListItemButton} from "@mui/material";
import Link from "next/link";
import {Person} from "@mui/icons-material";
import {SideBarListItemText} from "../../Common/SideBarListItemText";
import {SideBarListItemIcon} from "../../Common/SideBarListItemIcon";

export const Member = () =>{

    const memberObj = [
        {typo:"회원 관리",icon:<Person />,url:"/member"},
    ]

    return (
        <>
            <List>
                {memberObj.map((obj, index) => (
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
            <Divider />
        </>
    );
}