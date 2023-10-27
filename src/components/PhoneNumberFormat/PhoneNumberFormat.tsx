import { TextField } from "@mui/material";
import React from "react";
import { UseFormClearErrors, UseFormSetValue, useForm } from "react-hook-form";
import { NumberFormatValues, PatternFormat } from "react-number-format";
import { FormData } from "../Contact/Contact";

type PhoneNumberFormatProps = {
    setValue: UseFormSetValue<FormData>,
    clearErrors: UseFormClearErrors<FormData>
}

export default function PhoneNumberFormat({ setValue, clearErrors }: PhoneNumberFormatProps) {
    const [pattern, setPattern] = React.useState('### #######');
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
    return (
        <PatternFormat
            fullWidth
            format={pattern}
            customInput={TextField}
            label="Phone Number"
            displayType="input"
            onValueChange={(val) => handlePhone(val)}
        />
    )
}