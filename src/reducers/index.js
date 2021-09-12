import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import ordersReducer from "./ordersReducer";
import cartReducer from "./cartReducer";
import preferencesReducer from "./preferencesReducer";

const reducers = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
  cart: cartReducer,
  preferences: preferencesReducer,
});

export default reducers;
