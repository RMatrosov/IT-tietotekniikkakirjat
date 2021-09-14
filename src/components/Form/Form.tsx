import React, {FC, ReactElement, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Box, Button, FormControlLabel, Switch, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./styles";
import {ICart} from "../../types/cart";


const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("Syötä etunimi"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Syötä sukunimi"),
    address: yup
        .string()
        .required("Syötä osoite"),
    post: yup
        .number()
        .required("Syötä postinumero"),
    city: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Syötä kaupunki"),
});


type FormTypesProps = {
    items: ICart[]
}


const Form: FC<FormTypesProps> = ({items}): ReactElement => {

    const classes = useStyles();

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        console.log(items)
    };

    const [hasPhone, setHasPhone] = useState(false);
    const [hasEmail, setHasEmail] = useState(false);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Box className={classes.textFieldWrapper}>
                <Typography component="h3" variant="h6">
                    Toimitusosoite
                </Typography>
                <Box>
                    <FormControlLabel control={
                        <Switch
                            checked={hasEmail}
                            onChange={() => setHasEmail(!hasEmail)}
                            name="hasEmail"
                            inputProps={{'aria-label': 'primary checkbox'}}/>}
                                      label="Sähköpostiosoite ?"/>

                    <FormControlLabel control={
                        <Switch
                            checked={hasPhone}
                            onChange={() => setHasPhone(!hasPhone)}
                            name="hasPhone"
                            inputProps={{'aria-label': 'primary checkbox'}}/>}
                                      label="Puhelin ?"/>
                </Box>
                {hasEmail && (<TextField variant="outlined"
                                         size="small"
                                         label="Sähköpostiosoite"
                                         fullWidth={true}
                                         type="email"
                                         placeholder="Sähköpostiosoite"
                                         className={classes.email}
                />)}


                {hasPhone && (<TextField size="small" variant="outlined" label="Puhelin" fullWidth={true}/>)}

                <Box className={classes.box}>

                    <TextField variant="outlined"
                               size="small"
                               label="Etunimi"
                               id="firstName"
                               multiline
                               className={classes.TextField}
                               placeholder="Etunimi" type="text"
                               error={!!errors.firstName}
                               helperText={errors?.firstName?.message}
                               {...register("firstName", {
                                   required: "Required",
                               })}
                    />
                    <TextField variant="outlined"
                               size="small"
                               label="Sukunimi"
                               multiline
                               className={classes.TextField}
                               id="lastName"
                               placeholder="Sukunimi" type="text"
                               error={!!errors.lastName}
                               helperText={errors?.lastName?.message}
                               {...register("lastName", {
                                   required: "Required",
                               })}
                    />
                </Box>


                <TextField variant="outlined" label="Osoite"
                           size="small"
                           fullWidth={true}
                           className={classes.fullWidth}
                           error={!!errors.address}
                           helperText={errors?.address?.message}
                           {...register("address", {
                               required: "Required",
                           })}/>
                <Box className={classes.box}>
                    <TextField variant="outlined" label="Postinumero"
                               size="small"
                               className={classes.TextField}
                               error={!!errors.post}
                               helperText={errors?.post?.message}
                               {...register("post", {
                                   required: "Required",
                               })}/>

                    <TextField variant="outlined" label="Kaupunki"
                               size="small"
                               className={classes.TextField}
                               error={!!errors.city}
                               helperText={errors?.city?.message}
                               {...register("city", {
                                   required: "Required",
                               })}/>

                </Box>

            </Box>
            <Button className={classes.submitBtn}
                    type="submit">
                Tilata
            </Button>
        </form>
    );
}

export default Form