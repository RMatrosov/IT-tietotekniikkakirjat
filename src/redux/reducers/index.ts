import { combineReducers } from 'redux';
import books from "./books";
import search from "./search";
import filters from "./filter";
import cart from "./cart";
import paginate from "./paginate";

export type RootReducerType = typeof rootReducer


const rootReducer = combineReducers({
  books,
  search,
  filters,
  cart,
  paginate
});

export default rootReducer;