import {Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HandymanIcon from '@mui/icons-material/Handyman';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ForumIcon from '@mui/icons-material/Forum';
import Link from "next/link";
import {SideBarListItemIcon} from "../Common/SideBarListItemIcon";
import {SideBarListItemText} from "../Common/SideBarListItemText";

export default function Contents() {

    const contentObj = [
        {typo:"콘텐츠 관리",icon:<SupervisorAccountIcon />,url:""},
        {typo:"제작 콘텐츠",icon:<HandymanIcon  />,url:"/content/produce"},
        {typo:"참여 콘텐츠",icon:<DinnerDiningIcon  />,url:"/content/participate"},
        {typo:"댓글",icon:<ForumIcon />,url:"/content/comment"},
    ]

    return (
        <>
            <List>
                {contentObj.map((obj, index) => (
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