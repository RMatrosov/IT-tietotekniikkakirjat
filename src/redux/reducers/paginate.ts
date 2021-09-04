const initialState = {
  totalItemCount: 0,
  currentPage: 1,
  defaultItemsCount: 10
};

const paginate = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_TOTAL_ITEM_COUNT':
      return {
        ...state,
        totalItemCount: action.payload,
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export default paginate;