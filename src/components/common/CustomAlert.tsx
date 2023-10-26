import { Alert } from "@mui/material";
import React from 'react'

export default function CustomAlert(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
    return (
        <Alert sx={{ marginTop: 1 }} severity='warning' variant='filled'
        >
            {props.children}
        </Alert>
    )
}