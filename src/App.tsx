import {Container, makeStyles} from "@material-ui/core";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import SortPopup from "./components/SortPopup/SortPopup";
import {useEffect} from "react";
import {fetchBooks} from "./redux/action/books";
import {useDispatch, useSelector} from "react-redux";
import {setSortBy} from "./redux/action/filter";
import {Switch, Route, Redirect} from "react-router-dom";
import Image from "./components/Image/Image";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import {setTotalItemCount} from "./redux/action/paginate";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#e0e0e0',
    height: 'content'
  },
}));

function App() {

  const classes = useStyles();

  const dispatch = useDispatch();

  function onSortBy(item) {
    const type = item.type;
    const order = item.order
    dispatch(setSortBy(type, order))
  }

  const {currentPage} = useSelector(({paginate}) => paginate);

  const {type, order} = useSelector(({filters}) => filters.sortBy);

  const items = useSelector(({books}) => books.items);

  useEffect(() => {
    dispatch(fetchBooks(currentPage, type, order));
  }, [dispatch, currentPage, type, order]);

  useEffect(() => {
    axios.get(` http://localhost:3001/books?}`)
        .then(({data}) => {
          dispatch(setTotalItemCount(data.length))
        })
        .catch(e => console.log(e))
  }, [dispatch]);

  return (

      <Container maxWidth='md' className={classes.container}>
        <Switch>
          <Route exact path='/'>
            <Header/>
            <SortPopup onSortBy={onSortBy}/>
            <Main items={items}/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/img/:title'>
            <Image items={items}/>
          </Route>
          <Redirect to={{pathname: '/'}}/>
        </Switch>
      </Container>

  );
}

export default App;
