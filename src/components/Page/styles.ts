import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  btnGroup: {
    marginTop: 40,
    alignSelf: 'center',
    marginBottom: 40,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));