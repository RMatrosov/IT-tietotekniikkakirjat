import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex',
        width: 200,
        minHeight: 420,
        boxSizing: 'border-box',
        margin: '0 auto',
        flexDirection: 'column',
        border: '2px solid #f3f3f3',
        borderRadius: '2%',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.06)',
            transform: 'translateY(-5px)'
        }

    },
    media: {
        width: '100%',
        minHeight: 179,
        maxWidth: '100%',
        margin: 0,
        objectFit: 'fill'
    },
    title: {
        marginTop: 10,
        color: '#424242',
        fontWeight: 400,
        fontSize: 18,
    },
    price: {
        fontSize: '0.87rem',
        color: '#424242'
    },
    cardBtn: {
        background: 'linear-gradient(#b32d4e,#832138)',
        color: '#fff'
    },
    type: {
        fontSize: '0.87rem',
        color: '#424242'
    },
    cardContent: {
        margin: 0,
        padding: 10,
        height: 104
    },
    link: {
        textDecoration: 'none'
    }
});