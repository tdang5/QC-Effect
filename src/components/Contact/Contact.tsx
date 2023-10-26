import { Box, Divider, Grid, TextField } from "@mui/material";
import { CustomButton, FlexGrid } from "../common/Styles";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import { PatternFormat, NumberFormatValues } from "react-number-format";
import { Controller, useForm } from "react-hook-form";
import CustomAlert from "../common/CustomAlert";

type FormData = {
    name: string,
    email: string,
    phone: string,
    message: string,
}

export default function Contact() {
    const [pattern, setPattern] = React.useState('### #######');
    const { register, setValue, clearErrors, handleSubmit, formState: { errors }, control } = useForm<FormData>();
    const handlePhone = (val: NumberFormatValues) => {
        setValue('phone', val.value.toString());
        clearErrors('phone');
        switch (val.value.toString().length) {
            case 0:
                setPattern('### #######')
                break;
            case 1:
                setPattern('(### #######')
                break;
            case 3:
                setPattern('(### #######')
                break;
            case 4:
                setPattern('(###) #######')
                break;
            case 6:
                setPattern('(###) #######')
                break;
            case 7:
                setPattern('(###) ###-####')
                break;
        };
    };
    const onSubmit = handleSubmit(({ name, email, phone, message }) => {
        console.log(name, email, phone, message);
    });
    return (
        <Box sx={{ width: '100%', display: "flex" }} justifyContent='center'>
            <Grid container justifyContent='center' sx={{ width: '55%' }}>
                <FlexGrid justifyContent='left' item lg={5}>
                    <div>
                        <p>Have Questions about what we offer?</p>
                        <p>Contact Us</p>
                        <br />
                        <p>(123) 456-7890</p>
                        <p>qcfxllc@gmail.com</p>
                    </div>
                </FlexGrid>
                <FlexGrid justifyContent='center' item lg={1}>
                    <Divider orientation='vertical' />
                </FlexGrid>
                <Grid item lg={5}>
                    <form onSubmit={onSubmit}>
                        <Grid container justifyContent='right' spacing={2}>
                            <Grid item lg={12}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    {...register('name', { required: true, maxLength: 20, })}
                                />
                                {errors?.name?.type === 'required' &&
                                    <CustomAlert>Name is Required</CustomAlert>
                                }
                                {errors?.name?.type === "maxLength" && (
                                    <CustomAlert>Name cannot exceed 20 characters</CustomAlert>
                                )}
                            </Grid>
                            <Grid item lg={12}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    {...register('email', {
                                        required: true,
                                        maxLength: 50,
                                        pattern: /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                />
                                {errors?.email?.type === 'required' &&
                                    <CustomAlert>Email is Required</CustomAlert>
                                }
                                {errors?.email?.type === "maxLength" && (
                                    <CustomAlert>Name cannot exceed 50 characters</CustomAlert>
                                )}
                                {errors?.email?.type === "pattern" && (
                                    <CustomAlert>Must be a valid email address</CustomAlert>
                                )}
                            </Grid>
                            <Grid item lg={12}>
                                <Controller control={control} name='phone' rules={{ required: true, minLength: 10 }} render={() =>
                                    <PatternFormat
                                        fullWidth
                                        format={pattern}
                                        customInput={TextField}
                                        label="Phone Number"
                                        displayType="input"
                                        onValueChange={(val) => handlePhone(val)}
                                    />
                                } />
                                {errors?.phone?.type === 'required' &&
                                    <CustomAlert>Phone Number is Required</CustomAlert>
                                }
                                {errors?.phone?.type === "minLength" && (
                                    <CustomAlert>Please enter a valid phone number</CustomAlert>
                                )}
                            </Grid>
                            <Grid item lg={12}>
                                <TextField fullWidth label="How Can We Help?" {...register('message', { required: true })} />
                                {errors?.message?.type === 'required' &&
                                    <CustomAlert>Message is Required</CustomAlert>
                                }
                            </Grid>
                            <Grid item lg={12}>
                                <CustomButton fullWidth variant='contained' endIcon={<SendIcon />} type='submit'>Send </CustomButton>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}