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
