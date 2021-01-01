import React, { useReducer } from "react";
import axios from "axios";
import ProductContext from "./productContext";
import productReducer from "./productReducer";

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

const ProductState = (props) => {
  const initialState = {
    products: null,
    error: null,
    current: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Get Product
  const getProducts = async () => {
    try {
      const res = await axios.get("/api/products");

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add product
  const addProduct = async (product) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/products", product, config);

      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);

      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // update products
  const updateProduct = async (product) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/products/${product._id}`,
        product,
        config
      );

      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // clear products
  const clearProducts = (product) => {
    dispatch({ type: CLEAR_PRODUCTS });
  };

  const setCurrent = (product) => {
    dispatch({ type: SET_CURRENT, payload: product });
  };

  // clear current product
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        current: state.current,
        error: state.error,
        addProduct,
        deleteProduct,
        setCurrent,
        updateProduct,
        clearCurrent,
        getProducts,
        clearProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
