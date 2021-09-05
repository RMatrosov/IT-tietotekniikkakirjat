import axios from 'axios';
import {SET_BOOKS, SET_LOADED} from "../constants/constants";
import {itemsType} from "../reducers/books";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";


type setBooksActionType = {
    type: typeof SET_BOOKS,
    payload: Array<itemsType>
}

type setLoadedActionType = {
    type: typeof SET_LOADED,
    payload: boolean
}

export const setLoaded = (payload: boolean) => ({
    type: SET_LOADED,
    payload,
});

export type ActionType = setBooksActionType | setLoadedActionType

export const fetchBooks = (page: number, type: string | null, order: string | null)
    : ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch, getState) => {
        dispatch({
            type: SET_LOADED,
            payload: false,
        });

        axios.get(`https://tietotekniikkakirjat.herokuapp.com/books?_page=${page}&_sort=${type ? type : ''}&_order=${order ? order : ''}`).then(({data}) => {
            dispatch(setBooks(data));
        });
    }
}

export const setBooks = (items: Array<itemsType>): setBooksActionType => ({
    type: SET_BOOKS,
    payload: items,
});
