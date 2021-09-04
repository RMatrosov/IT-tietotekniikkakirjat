import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 380,
    marginBottom: 20,
    marginRight: 0
  },
  container: {
    backgroundColor: '#e0e0e0',
    height: 'content',
    position: 'relative'

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
    height: 620
  },
  boxWrapper: {
    display: "flex",
    justifyContent: 'space-around',
    marginTop: 80,
    flexWrap: 'wrap',
    minHeight: '100vh',
  }

}));