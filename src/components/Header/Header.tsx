import { CustomLink, Nav, BorderButton } from "./Header.Styles"
import logo from "../../../public/QCFX Black.png"
import { Grid } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FlexGrid, Logo } from "../common/Styles";

export default function Header() {
    return (
        <Nav>
            <Grid container alignItems='center'>
                <FlexGrid justifyContent='right' item lg={4}>
                    <Logo src={logo.src} />
                </FlexGrid>
                <FlexGrid justifyContent='center' item lg={4}>
                    <CustomLink href='/'>Home</CustomLink>
                    <CustomLink href='/about'>About Us</CustomLink>
                    <CustomLink href='/contact'>Contact Us</CustomLink>
                </FlexGrid>
                <FlexGrid>
                    <BorderButton>Work With Us&nbsp;<ArrowForwardIosIcon fontSize='small' /></BorderButton>
                </FlexGrid>
            </Grid>
        </Nav>
    )
}