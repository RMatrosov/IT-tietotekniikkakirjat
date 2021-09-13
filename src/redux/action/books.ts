import axios from 'axios';
import {SET_BOOKS, SET_LOADED} from "../constants/constants";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {ActionType, itemsType, setBooksActionType} from "../../types/books";


export const ROOT_API_URL = 'http://localhost:3001/'
export const url = new URL(`${ROOT_API_URL}books?`)

export const setLoaded = (payload: boolean) => ({
    type: SET_LOADED,
    payload,
});


export const fetchBooks = (page: number, type: string | null, order: string | null)
    : ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch, getState) => {
        dispatch({
            type: SET_LOADED,
            payload: false,
        });


        url.search = new URLSearchParams({
            '_page': page.toString(),
            '_sort': type ? type : '',
            '_order': order ? order : ''
        }).toString();

        axios.get(url.toString()).then(({data}) => {
            dispatch(setBooks(data));
        })


        /*axios.get(`http://localhost:3001/books?_page=${page}&_sort=${type ? type : ''}&_order=${order ? order : ''}`).then(({data}) => {
            dispatch(setBooks(data));
        });*/
    }
}

export const setBooks = (items: itemsType[]): setBooksActionType => ({
    type: SET_BOOKS,
    payload: items,
});
