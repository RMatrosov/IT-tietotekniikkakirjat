import React, {FunctionComponent, ReactElement, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Box, Button, FormControlLabel, Switch, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./styles";
import {InitialStateType} from "../../redux/reducers/cart";

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
    items: InitialStateType
}


const Form: FunctionComponent<FormTypesProps> = ({items}): ReactElement => {

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
                                 label="Sähköpostiosoite"
                                 fullWidth={true}
                                 type="email"
                                 placeholder="Sähköpostiosoite"
                                 className={classes.email}
        />)}


        {hasPhone && (<TextField variant="outlined" label="Puhelin" fullWidth={true}/>)}

        <Box className={classes.box}>
          <TextField variant="outlined"
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
                   fullWidth={true}
                   className={classes.fullWidth}
                   error={!!errors.address}
                   helperText={errors?.address?.message}
                   {...register("address", {
                     required: "Required",
                   })}/>
        <Box className={classes.box}>
          <TextField variant="outlined" label="Postinumero"
                     className={classes.TextField}
                     error={!!errors.post}
                     helperText={errors?.post?.message}
                     {...register("post", {
                       required: "Required",
                     })}/>

          <TextField variant="outlined" label="Kaupunki"
                     className={classes.TextField}
                     error={!!errors.city}
                     helperText={errors?.city?.message}
                     {...register("city", {
                       required: "Required",
                     })}/>

        </Box>


        <Button variant="outlined" className={classes.submitBtn}
                color="secondary" type="submit">
          Tilata
        </Button>
      </form>
  );
}

export default Form