import {SET_SORT_BY} from "../constants/constants";
import {InitialStateType, setSortByActionType} from "../../types/filter";




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