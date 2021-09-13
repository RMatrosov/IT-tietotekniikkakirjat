import {itemsType} from "./books";
import {ADD_BOOK_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from "../redux/constants/constants";

export interface ICart {
    product: itemsType
    quantity: number
}

export interface InitialStateType {
    cartList: ICart[]
}

export type CartActionTypes =
    addBookToCartActionType | removeCartItemActionType
    | plusCartItemActionType | minusCartItemActionType


interface addBookToCartActionType {
    type: typeof ADD_BOOK_CART,
    payload: itemsType
}

interface removeCartItemActionType {
    type: typeof REMOVE_CART_ITEM,
    payload: string
}

interface plusCartItemActionType {
    type: typeof PLUS_CART_ITEM,
    payload: string
}

interface minusCartItemActionType {
    type: typeof MINUS_CART_ITEM,
    payload: string
}