import styled from "@emotion/styled"
import { Button, Grid } from "@mui/material";
import Link from "next/link";


export const Nav = styled.nav(() => ({
    width: '100%',
    height: '10%',
    fontFamily: "HelveticaNeue,Helvetica Neue,helvetica,Sans-Serif",
    boxShadow: '0px 1px 10px black'
}));

export const CustomLink = styled(Link)(() => ({
    textDecoration: 'none',
    fontSize: 15,
    padding: '0px 10px 0px 10px',
    color: 'black'
}));

export const Logo = styled.img(() => ({
    height: 150
}));

export const FlexGrid = styled(Grid)(() => ({
    display: 'flex',
}));

export const BorderButton = styled.a(() => ({
    color: '#FAA94A',
    border: 'solid 1px #FAA94A',
    borderRadius: 15,
    padding: '8px 10px 8px 15px',
    fontWeight: 'bold',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    [`:hover`]: {
        color: 'white',
        background: '#FAA94A',
    }
}));

