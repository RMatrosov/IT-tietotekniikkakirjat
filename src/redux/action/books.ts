import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchBooks = (page, type, order) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get(` http://localhost:3001/books?_page=${page}&_sort=${type ? type : ''}&_order=${order ? order : ''}`).then(({data}) => {
    dispatch(setBooks(data));
  });
}

export const setBooks = (items) => ({
  type: 'SET_BOOKS',
  payload: items,
});
