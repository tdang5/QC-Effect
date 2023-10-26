import styled from "@emotion/styled"
import { Grid } from "@mui/material";
import Link from "next/link";


export const Nav = styled.nav(() => ({
    width: '100%',
    height: '10%',
    fontFamily: "HelveticaNeue,Helvetica Neue,helvetica,Sans-Serif",
    boxShadow: '0px 1px 10px black'
}));

export const CustomLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'Black',
    fontSize: 15,
    padding: '0px 10px 0px 10px'
}));

export const Logo = styled.img(() => ({
    height: 150
}));

export const FlexGrid = styled(Grid)(() => ({
    display: 'flex',
}));