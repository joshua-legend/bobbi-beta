import {Breadcrumbs, Button, Stack, Typography} from "@mui/material";

interface IProfile {
    id:string
}

export const Profile = ({id}:IProfile) => {
    return (
        <>
            <Stack   direction="row"
                     justifyContent="space-between"
                     alignItems="center"
                     spacing={0}>
                <Typography fontSize={"x-large"}>{id}</Typography>
                <Button sx={{fontSize:"20px"}} variant="text">로그아웃</Button>
            </Stack>
        </>
    );
}