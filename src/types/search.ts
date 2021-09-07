import {SEARCH_BOOKS} from "../redux/constants/constants";

export interface InitialStateType {
    search: string
}

export interface searchBooksActionType {
    type: typeof SEARCH_BOOKS,
    payload: string
}