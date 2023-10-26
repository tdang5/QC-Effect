import { Divider, FormControl, Grid, TextField } from "@mui/material";
import { FlexGrid } from "../common/Styles";



export default function Contact() {

    return (
        <>
            <Grid container justifyContent='center'>
                <FlexGrid justifyContent='center' item lg={5}>
                    Contact Us
                </FlexGrid>
                <FlexGrid justifyContent='center' item lg={2}>
                    <Divider orientation='vertical' />
                </FlexGrid>
                <Grid item lg={5}>
                    <Grid container justifyContent='center'>
                        <FormControl>
                            <Grid item lg={6}>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </Grid>
                            <Grid item lg={6}>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </Grid>
                            <Grid item lg={12}>
                                <TextField id="outlined-basic" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item lg={12}>
                                <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                            </Grid>
                            <Grid item lg={12}>
                                <TextField id="outlined-basic" label="How Can We Help?" variant="outlined" />
                            </Grid>
                        </FormControl>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}