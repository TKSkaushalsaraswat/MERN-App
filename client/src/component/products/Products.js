import React, { Fragment, useContext, useEffect } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProductContext from "../../context/product/productContext";
import ProductItem from "./ProductItem";
import Spinner from "../layout/Spinner";

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, getProducts, loading } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  if (products !== null && products.length === 0 && !loading) {
    return <h4>Please add a Product</h4>;
  }

  return (
    <div>
      {products !== null && !loading ? (
        products.map((product) => (
          <ProductItem key={product._id} products={product} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Products;
