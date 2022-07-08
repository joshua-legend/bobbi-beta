import {useRouter} from "next/router";
import {BREADCRUMB_MENU as BREAD} from "../../../constants/breadcrumb";
import {Box, Stack} from "@mui/material";
import {BreadCrumb} from "./Part/BreadCrumb/BreadCrumb";
import {Profile} from "./Part/Profile/Profile";


export const Navbar = () => {

    const router = useRouter();
    const {parent, child} = BREAD.find(obj =>obj.url === router.pathname);

    return (
        <Stack
            sx={{margin:"5rem"}}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <BreadCrumb parent={parent} child={child} />
            <Profile id={"김바비(admin1)"}></Profile>
        </Stack>
    );
}
