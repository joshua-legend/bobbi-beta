import {Breadcrumbs, Divider, List, ListItem, ListItemButton, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {Person} from "@mui/icons-material";
import {ChevronRight} from "@styled-icons/material";

interface IBreadCrumb {
    parent:string,
    child:string,
}

export const BreadCrumb = ({parent,child}:IBreadCrumb) => {


    return (
        <>
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<ChevronRight style={{height:"40px"}} />}
                    aria-label="breadcrumb"
                >
                    <Typography fontSize={"x-large"}>{parent}</Typography>
                    <Typography fontSize={"x-large"}>{child}</Typography>
                </Breadcrumbs>
            </Stack>
        </>
    );
}