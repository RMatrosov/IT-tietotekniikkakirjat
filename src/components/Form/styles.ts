import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    margin: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  TextField: {
    width: '48%',
    marginTop: 20,
    marginBottom: 20
  },
  fullWidth: {
    marginTop: 20,
  },
  submitBtn: {
    marginTop: 20,
    width: 250,
    height: 60,
    alignSelf: 'center'
  },
  email:{
    marginTop: 20,
    marginBottom: 20
  }

}))