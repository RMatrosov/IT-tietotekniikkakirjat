import {ADD_BOOK_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from "../constants/constants";
import {CartActionTypes, InitialStateType} from "../../types/cart";


const initialState: InitialStateType = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    cartList: {}
};

const getTotalPrice = (arr: any[]) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj: any, path: any) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val: any, key: any) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj: {}, path: string) => {

    return Object.values(obj).reduce((sum, obj) => {

        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const cart = (state = initialState, action: CartActionTypes | any) => {
    switch (action.type) {
        case ADD_BOOK_CART: {


            const currenItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currenItems,
                    totalPrice: getTotalPrice(currenItems),
                },
            };


            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
                cartList: newItems
            };
        }

        case REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items,
            };

            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;

            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case PLUS_CART_ITEM: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case MINUS_CART_ITEM: {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        /* case 'CLEAR_CART':
             return {totalPrice: 0, totalCount: 0, items: {}};*/

        default:
            return state;
    }
}

export default cart;