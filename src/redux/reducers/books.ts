import {SET_BOOKS, SET_LOADED} from "../constants/constants";
import {ActionType} from "../action/books";

export type itemsType = {
    author: string
    id: string
    imgMedium: string
    imgSmall: string
    price: number
    title: string
    type: string
}

export type InitialStateType = {
    items: Array<itemsType>
    isLoaded: boolean
}

const initialState: InitialStateType = {
    items: [],
    isLoaded: false,
};

const books = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };

        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };

        default:
            return state;
    }
};

export default books;
