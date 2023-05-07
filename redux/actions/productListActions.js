import { productListActionTypes } from "./actionTypes";

export const getProductList = () => {
  return {
    type: productListActionTypes.GET_PRODUCT_LIST,
    payload: 0,
  };
};

export const addToProductList = (product) => {
  return {
    type: productListActionTypes.ADD_PRODUCT_TO_PRODUCT_LIST,
    payload: product,
  };
};
export const deleteFromProductList = (product) => {
  return {
    type: productListActionTypes.DELETE_FROM_PRODUCT_LIST,
    payload: product,
  };
};
