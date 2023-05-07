import { shoppingListActionTypes } from "../actions/actionTypes";
import { shoppingList } from "../states/shoppingList";

export default ShoppingListReducer = (state = shoppingList, action) => {
  switch (action.type) {
    case shoppingListActionTypes.GET_SHOPPING_LIST:
      return state;
    case shoppingListActionTypes.ADD_PRODUCT_TO_SHOPPING_LIST:
      return state.push(action.payload);
    case shoppingListActionTypes.DELETE_FROM_SHOPPING_LIST:
      return state.filter((item) => action.payload.id != item.id);
    default:
      return state;
  }
};
