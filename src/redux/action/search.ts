import {SEARCH_BOOKS} from "../constants/constants";
import {searchBooksActionType} from "../../types/search";


export const searchBooks = (value: string): searchBooksActionType => ({
    type: SEARCH_BOOKS,
    payload: value,
});
