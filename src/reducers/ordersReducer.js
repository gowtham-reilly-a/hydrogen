const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_ORDER":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default ordersReducer;
