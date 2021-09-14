import {SET_SORT_BY} from "../redux/constants/constants";

export type InitialStateType = {
    sortBy: {
        type: string | null,
        order: string | null,
        label: string
    },
}

type payloadType = {
    type: string | null
    order: string | null
    label: string
}

export type setSortByActionType = {
    type: typeof SET_SORT_BY,
    payload: payloadType
}