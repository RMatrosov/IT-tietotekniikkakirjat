import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 380,
        marginBottom: 20,
        marginRight: 0
    },
    container: {
        height: 'content',
        position: 'relative'

    },
    title: {
        color: '#222',
        fontWeight: 900,
        fontSize: '.875rem',
    },
    authorText: {
        lineHeight: '1.4',
        fontSize: '.8125rem',
    },
    backBtn: {
        background: 'linear-gradient(#b32d4e,#832138)',
        color: '#fff',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 150,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        flexWrap: 'wrap',
    },
    bookIcon: {
        marginLeft: 20
    },
    link: {
        textDecoration: 'none',
        position: 'absolute',
        right: 0,
        top: 0
    },
    box: {
        width: 380,
    },
    formBox: {
        width: 450,
        height: 570,
        border: '2px solid #fff',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 25%)',
        background: '#f5f5f5'
    },
    boxWrapper: {
        display: "flex",
        justifyContent: 'space-around',
        marginTop: 80,
        flexWrap: 'wrap',
        minHeight: '100vh',
    }

}));