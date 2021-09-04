import {SET_CURRENT_PAGE, SET_TOTAL_ITEM_COUNT} from "../constants/constants";


type setTotalItemCountActionType = {
    type: typeof SET_TOTAL_ITEM_COUNT,
    payload: number
}

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    payload: number
}

export type PaginateActionType = setTotalItemCountActionType | setCurrentPageActionType

export const setTotalItemCount = (value: number): setTotalItemCountActionType => ({
    type: SET_TOTAL_ITEM_COUNT,
    payload: value,
});


export const setCurrentPage = (value: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    payload: value,
});