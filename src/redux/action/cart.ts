import {ADD_BOOK_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from "../constants/constants";
import {itemsType} from "../reducers/books";

export type CartActionTypes =
    addBookToCartActionType | removeCartItemActionType
    | plusCartItemActionType | minusCartItemActionType


type addBookToCartActionType = {
    type: typeof ADD_BOOK_CART,
    payload: itemsType
}

type removeCartItemActionType = {
    type: typeof REMOVE_CART_ITEM,
    payload: string
}

type plusCartItemActionType = {
    type: typeof PLUS_CART_ITEM,
    payload: string
}

type minusCartItemActionType = {
    type: typeof MINUS_CART_ITEM,
    payload: string
}

export const addBookToCart = (item: itemsType): addBookToCartActionType => ({
    type: ADD_BOOK_CART,
    payload: item,
});

export const removeCartItem = (id: string): removeCartItemActionType => ({
    type: REMOVE_CART_ITEM,
    payload: id,
});

export const plusCartItem = (id: string): plusCartItemActionType => ({
    type: PLUS_CART_ITEM,
    payload: id,
});

export const minusCartItem = (id: string): minusCartItemActionType => ({
    type: MINUS_CART_ITEM,
    payload: id,
});

/*export const clearCart = () => ({
  type: 'CLEAR_CART',
});*/



