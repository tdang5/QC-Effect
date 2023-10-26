import styled from "@emotion/styled";
import { Grid, Button } from "@mui/material";

export const Logo = styled.img(() => ({
    height: 150
}));

export const FlexGrid = styled(Grid)(() => ({
    display: 'flex',
}));

type CustomButtonProps = {
    variant: string
}
export const CustomButton = styled(Button)(({ variant }: CustomButtonProps) => ({
    color: variant == 'outlined' ? '#FAA94A' : 'white',
    border: 'solid 1px #FAA94A',
    borderRadius: 15,
    padding: '8px 10px 8px 15px',
    fontWeight: 'bold',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    backgroundColor: variant == 'outlined' ? 'white' : '#FAA94A',
    [`:hover`]: {
        color: variant == 'outlined' ? 'white' : '#FAA94A',
        background: variant == 'outlined' ? '#FAA94A' : 'white',
        borderColor: variant == 'outlined' ? 'white' : '#FAA94A'
    }

}));