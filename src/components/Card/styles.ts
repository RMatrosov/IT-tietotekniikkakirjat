import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    width: '100%',
    minHeight: 260,
    maxWidth: '100%',
    margin: 0,
    objectFit: 'fill'
  },
  title: {
    marginTop: 10,
    color: '#424242'
  },
  price: {
    fontSize: '0.87rem',
    color: '#424242'
  },
  type: {
    fontSize: '0.87rem',
    color: '#424242'
  },
  cardContext: {
    margin: 0,
    padding: 10
  },
  link: {
    textDecoration: 'none'
  }
});