import {SvgIconTypeMap} from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import {Person} from "@mui/icons-material";


type Sidebar =  {typo: string, icon: JSX.Element, url: string};

export const SIDEBAR_ITEM: Sidebar[] = [
    {typo:"콘텐츠 관리", icon: <SupervisorAccountIcon /> , url:""},
    // {typo:"제작 콘텐츠",icon:<HandymanIcon />,url:"/content/produce"},
    // {typo:"참여 콘텐츠",icon:<DinnerDiningIcon  />,url:"/content/participate"},
    // {typo:"댓글",icon:<ForumIcon />,url:"/content/comment"},
    {typo:"회원 관리",icon:<Person />,url:"/member"},
    {typo:"관리자 관리",icon:<SupervisorAccountIcon />,url:""},
];


