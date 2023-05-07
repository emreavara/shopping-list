import { shoppingListActionTypes } from "./actionTypes";

const getShoppingList = () => {
  return {
    type: shoppingListActionTypes.GET_SHOPPING_LIST,
    payload: 0,
  };
};

const addToShoppingList = (product) => {
  return {
    type: shoppingListActionTypes.ADD_PRODUCT_TO_SHOPPING_LIST,
    payload: product,
  };
};
const deleteFromShoppingList = (product) => {
  return {
    type: shoppingListActionTypes.DELETE_FROM_SHOPPING_LIST,
    payload: product,
  };
};
