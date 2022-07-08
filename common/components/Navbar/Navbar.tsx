import {ChevronRight} from "@styled-icons/material";
import {BreadCrumbContainer} from "./Part/BreadCrumbContainer";
import {useRouter} from "next/router";
import {BREADCRUMB_MENU as BREAD} from "../../../constants/breadcrumb";
import {Box, Breadcrumbs, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {BreadCrumb} from "./Part/BreadCrumb/BreadCrumb";


export const Navbar = () => {

    const router = useRouter();
    const {parent, child} = BREAD.find(obj =>obj.url === router.pathname);


    return (
        <Stack>
            <BreadCrumbContainer size={"fluid"}>
                <BreadCrumb parent={parent} child={child} />
                <Box>
                    <span>김바비(admin1)</span>
                    <span>로그아웃</span>
                </Box>
            </BreadCrumbContainer>
        </Stack>
    );
}
