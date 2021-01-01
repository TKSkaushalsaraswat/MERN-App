import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODUCT,
  PRODUCT_ERROR,
  CLEAR_PRODUCTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: null,
        error: null,
        current: null,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
