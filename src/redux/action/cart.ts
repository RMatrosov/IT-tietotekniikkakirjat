export const addBookToCart = (item) => ({
  type: 'ADD_BOOK_CART',
  payload: item,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const  minusCartItem = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});



