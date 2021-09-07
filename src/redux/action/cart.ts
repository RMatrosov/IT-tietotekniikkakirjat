import {ADD_BOOK_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from "../constants/constants";
import {itemsType} from "../../types/books";
import {CartActionTypes} from "../../types/cart";



export const addBookToCart = (item: itemsType): CartActionTypes => ({
    type: ADD_BOOK_CART,
    payload: item,
});

export const removeCartItem = (id: string): CartActionTypes => ({
    type: REMOVE_CART_ITEM,
    payload: id,
});

export const plusCartItem = (id: string): CartActionTypes => ({
    type: PLUS_CART_ITEM,
    payload: id,
});

export const minusCartItem = (id: string): CartActionTypes => ({
    type: MINUS_CART_ITEM,
    payload: id,
});

/*export const clearCart = () => ({
  type: 'CLEAR_CART',
});*/



