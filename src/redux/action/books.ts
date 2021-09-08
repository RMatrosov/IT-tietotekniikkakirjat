import axios from 'axios';
import {SET_BOOKS, SET_LOADED} from "../constants/constants";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {ActionType, itemsType, setBooksActionType} from "../../types/books";



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

        axios.get(`http://localhost:3001/books?_page=${page}&_sort=${type ? type : ''}&_order=${order ? order : ''}`).then(({data}) => {
            dispatch(setBooks(data));
        });
    }
}

export const setBooks = (items: Array<itemsType>): setBooksActionType => ({
    type: SET_BOOKS,
    payload: items,
});
