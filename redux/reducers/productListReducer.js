import { productListActionTypes } from "../actions/actionTypes";
// import { productList } from "../states/productList";

const initialState = {
  productList: [],
};

export default ProductListReducer = (state = initialState, action) => {
  switch (action.type) {
    case productListActionTypes.GET_PRODUCT_LIST:
      return state.productList;
    case productListActionTypes.ADD_PRODUCT_TO_PRODUCT_LIST:
      return state.push(action.payload);
    case productListActionTypes.DELETE_FROM_PRODUCT_LIST:
      return state.filter((item) => action.payload.id != item.id);
    default:
      return state;
  }
};
