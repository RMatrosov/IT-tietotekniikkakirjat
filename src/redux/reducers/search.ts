import {SEARCH_BOOKS} from "../constants/constants";
import {searchBooksActionType} from "../action/search";

export type InitialStateType = {
    search: string
}

const initialState: InitialStateType = {
    search: '',
};

const search = (state = initialState, action: searchBooksActionType): InitialStateType => {
    switch (action.type) {
        case SEARCH_BOOKS:
            return {
                search: action.payload,
            };

        default:
            return state;
    }
};

export default search;