import {SET_CURRENT_PAGE, SET_TOTAL_ITEM_COUNT} from "../redux/constants/constants";

export interface InitialStateType {
    totalItemCount: number,
    currentPage: number,
    defaultItemsCount: number
}

interface setTotalItemCountActionType {
    type: typeof SET_TOTAL_ITEM_COUNT,
    payload: number
}

interface setCurrentPageActionType {
    type: typeof SET_CURRENT_PAGE,
    payload: number
}

export type PaginateActionType = setTotalItemCountActionType | setCurrentPageActionType