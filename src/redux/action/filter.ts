import {SET_SORT_BY} from "../constants/constants";
import {setSortByActionType} from "../../types/filter";


export const setSortBy =
    (type: string | null, order: string | null, label: string)
        : setSortByActionType => ({
        type: SET_SORT_BY,
        payload: {type, order,label},
    });


