import {SET_BOOKS, SET_LOADED} from "../redux/constants/constants";

export interface itemsType {
    [author:string]: string | number
    id: string
    imgMedium: string
    imgSmall: string
    price: number
    title: string
    type: string
}

export interface InitialStateType {
    items: Array<itemsType>
    isLoaded: boolean
}

export interface setBooksActionType {
    type: typeof SET_BOOKS,
    payload: Array<itemsType>
}

export interface setLoadedActionType {
    type: typeof SET_LOADED,
    payload: boolean
}

export type ActionType = setBooksActionType | setLoadedActionType