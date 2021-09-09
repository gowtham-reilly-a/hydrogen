const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [action.payload, ...state];
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload);
    case "UPDATE_CART":
      return state.map((product) => {
        if (product.id !== action.payload.id) return product;

        return action.payload;
      });
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export default cartReducer;
