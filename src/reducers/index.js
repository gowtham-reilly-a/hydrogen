import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import ordersReducer from "./ordersReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
  cart: cartReducer,
});

export default reducers;
