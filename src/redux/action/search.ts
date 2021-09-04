import {SEARCH_BOOKS} from "../constants/constants";


export type searchBooksActionType = {
    type: typeof SEARCH_BOOKS,
    payload: string
}

export const searchBooks = (value: string): searchBooksActionType => ({
    type: SEARCH_BOOKS,
    payload: value,
});
