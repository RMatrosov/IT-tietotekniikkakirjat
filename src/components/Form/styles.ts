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
    },
    textFieldWrapper:{
        display: 'flex',
        flexDirection: 'column',
        height: 470
    },
    fullWidth: {
        marginTop: 20,
    },
    submitBtn: {
        background: 'linear-gradient(#b32d4e,#832138)',
        color: '#fff',
        marginTop: 20,
        width: '100%',
        height: 44,
        alignSelf: 'center'
    },
    email: {
        marginTop: 20,
        marginBottom: 20
    }

}))