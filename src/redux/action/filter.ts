import {SET_SORT_BY} from "../constants/constants";


type payloadType = {
    type: string | null
    order: string | null
}

export type setSortByActionType = {
    type: typeof SET_SORT_BY,
    payload: payloadType
}

export const setSortBy = (type: string | null, order: string | null): setSortByActionType => ({
    type: SET_SORT_BY,
    payload: {type, order},
});


