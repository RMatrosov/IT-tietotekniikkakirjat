import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '40px 0 40px 0',
        width: '100%'
    },
    btnGroup: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.1s ease-in-out',
        margin: '0 auto',
        height: 40,
        width: 170,
        fontSize: 'x-small',
        fontWeight: 'bold',
        '&:hover': {
            border: '1px solid black',
        }
    },

    activeBtn: {
        backgroundColor: '#282828',
        color: '#fff',
        fontWeight: 'bold',
        transition: 'background-color 0.1s ease-in-out',
        margin: '0 auto',
        height: 40,
        width: 170,
        fontSize: 'x-small',
        '&:hover': {
            backgroundColor: '#282828',
        }
    },
}));
