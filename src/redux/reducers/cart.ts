import {ADD_BOOK_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from "../constants/constants";
import {CartActionTypes, InitialStateType} from "../../types/cart";


const initialState: InitialStateType = {
    cartList: [],
};


const cart = (state = initialState, action: CartActionTypes) => {
    switch (action.type) {
        case ADD_BOOK_CART: {
            let items = state.cartList;
            const productIndex = items.findIndex((item: { product: { id: string; }; }) =>
                item.product.id === action.payload.id);
            if (productIndex !== -1) {
                items[productIndex].quantity += 1;
            } else {
                items.push({product: action.payload, quantity: 1});
            }

            return {
                ...state,
                cartList: items,
            };
        }

        case REMOVE_CART_ITEM: {
            let newCartList = state.cartList;
            const itemIndex = newCartList.findIndex((item: { product: { id: string; }; }) =>
                item.product.id === action.payload);
            if (itemIndex !== -1) {
                newCartList.splice(itemIndex, 1)
            }

            return {
                ...state,
            };
        }

        case PLUS_CART_ITEM: {
            let newCartList = state.cartList;
            const itemIndex = newCartList.findIndex((item: { product: { id: string; }; }) =>
                item.product.id === action.payload);
            if (itemIndex !== -1) {
                newCartList[itemIndex].quantity += 1;
            }

            return {
                ...state,
                cartList: newCartList
            };
        }

        case MINUS_CART_ITEM: {
            let newCartList = state.cartList;
            const itemIndex = newCartList.findIndex((item: { product: { id: string; }; }) =>
                item.product.id === action.payload);
            if (itemIndex !== -1) {
                if (newCartList[itemIndex].quantity > 1) {
                    newCartList[itemIndex].quantity -= 1;
                }
            }

            return {
                ...state,
                cartList: newCartList
            };
        }

        /* case 'CLEAR_CART':
             return {totalPrice: 0, totalCount: 0, items: {}};*/

        default:
            return state;
    }
}

export default cart;