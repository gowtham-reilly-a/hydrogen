import history from "../history";

export const createProduct = (product) => {
  history.push("/products");
  return {
    type: "CREATE_PRODUCT",
    payload: product,
  };
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

export const selectSearchResult = (id) => {
  return {
    type: "SELECT_RESULT",
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const updateCart = (product) => {
  return {
    type: "UPDATE_CART",
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const createOrder = (order) => {
  return {
    type: "CREATE_ORDER",
    payload: order,
  };
};

export const changeTheme = (themeName) => {
  return {
    type: "CHANGE_THEME",
    payload: themeName,
  };
};
