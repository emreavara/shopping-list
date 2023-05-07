import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingListReducer";
import productListReducer from "./productListReducer";

export const reducers = combineReducers({
  shoppingListReducer,
  productListReducer,
});
