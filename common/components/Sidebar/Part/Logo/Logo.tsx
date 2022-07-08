import {Box, Divider, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

export const Logo = () => {

    const LogoTypography = styled(Typography)`
      margin: 5rem 2rem;
      
      font-family: 'Work Sans', sans-serif;
      font-weight: 700;
      line-height: 35px;
    `;

    return (
        <>
            <Box>
                <LogoTypography variant={"h3"} align={"center"}>BOBBI Admin</LogoTypography>
            </Box>
            <Divider />
        </>
    );
}