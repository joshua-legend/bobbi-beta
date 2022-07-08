import {ChevronRight} from "@styled-icons/material";
import {HeaderSection} from "./part/HeaderSection";
import {BreadCrumbContainer} from "./part/BreadCrumbContainer";
import {ProfileBox} from "./part/ProfileBox";
import {useRouter} from "next/router";
import {BREADCRUMB_MENU as BREAD} from "../../../util/constants/breadcrumb";
import {Breadcrumbs, Stack, Typography} from "@mui/material";
import Link from "next/link";


export const NavbarComp = () => {

    const router = useRouter();
    const {parent, child} = BREAD.find(obj =>obj.url === router.pathname);


    const breadcrumbs = [
        <Link key={1} href="/">
            <Typography fontSize={"x-large"}>{parent}</Typography>
        </Link>,
        <Typography fontSize={"x-large"} key="2">
            {child}
        </Typography>,
    ];


    return (
        <HeaderSection padding={"md"} >
            <BreadCrumbContainer size={"fluid"}>
                <Stack spacing={2}>
                    <Breadcrumbs
                        separator={<ChevronRight style={{height:"40px"}} />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
                <ProfileBox>
                    <span>김바비(admin1)</span>
                    <span>로그아웃</span>
                </ProfileBox>
            </BreadCrumbContainer>
        </HeaderSection>
    );
}
