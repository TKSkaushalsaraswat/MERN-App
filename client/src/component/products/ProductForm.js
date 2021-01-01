import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../../context/product/productContext";

const ProductForm = () => {
  const productContext = useContext(ProductContext);

  const { addProduct, current, clearCurrent, updateProduct } = productContext;

  useEffect(() => {
    if (current !== null) {
      setProduct(current);
    } else {
      setProduct({
        name: "",
        id: "",
        price: "",
        image: "",
      });
    }
  }, [productContext, current]);

  const [product, setProduct] = useState({
    name: "",
    id: "",
    price: "",
    image: "",
  });

  const { name, id, price } = product;

  const onChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current == null) {
      addProduct(product);
    } else {
      updateProduct(product);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Product" : "Add Product"}
      </h2>
      <input
        type="text"
        placeholder="Product Id"
        name="id"
        value={id}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Product Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Product Price"
        name="price"
        value={price}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value={current ? "Update Product" : "Add Product"}
          className="btn btn-primary btn-block"
          onChange={onChange}
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            {" "}
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ProductForm;
