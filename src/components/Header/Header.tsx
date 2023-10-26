import { CustomLink, Nav } from "./Header.Styles"
import logo from "../../../public/QCFX Black.png"
import { Grid } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FlexGrid, Logo, CustomButton } from "../common/Styles";

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
                    <CustomButton variant='outlined' endIcon={<ArrowForwardIosIcon fontSize='small' />}>Work With Us</CustomButton>
                </FlexGrid>
            </Grid>
        </Nav>
    )
}