import {SET_SORT_BY} from "../constants/constants";
import {setSortByActionType} from "../action/filter";


export type InitialStateType = {
    sortBy: {
        type: string | null,
        order: string | null,
    },
}

const initialState: InitialStateType = {
    sortBy: {
        type: null,
        order: null,
    },
};

const filters = (state = initialState, action: setSortByActionType): InitialStateType => {
    if (action.type === SET_SORT_BY) {
        return {
            ...state,
            sortBy: action.payload,
        };
    }

    return state;
};

export default filters;