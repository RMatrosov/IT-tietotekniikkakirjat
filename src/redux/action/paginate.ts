import {SET_CURRENT_PAGE, SET_TOTAL_ITEM_COUNT} from "../constants/constants";
import {PaginateActionType} from "../../types/paginate";




export const setTotalItemCount = (value: number): PaginateActionType => ({
    type: SET_TOTAL_ITEM_COUNT,
    payload: value,
});


export const setCurrentPage = (value: number): PaginateActionType => ({
    type: SET_CURRENT_PAGE,
    payload: value,
});