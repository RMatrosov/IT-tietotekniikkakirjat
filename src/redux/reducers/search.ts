const initialState = {
  search: '',

};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS':
      return {
        search: action.payload,
      };

    default:
      return state;
  }
};

export default search;