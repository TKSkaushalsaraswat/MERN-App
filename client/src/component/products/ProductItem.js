import React, { useContext } from "react";
import ProductContext from "./../../context/product/productContext";

const ContactItem = ({ products }) => {
  const productContext = useContext(ProductContext);
  const { deleteProduct, setCurrent, clearCurrent } = productContext;

  const { _id, name, id, price, type } = products;

  const onDelete = () => {
    deleteProduct(_id);
    console.log();
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">Name: {name} </h3>
      <ul className="list">
        {id && <li>Id: {id}</li>}
        {price && <li>Price: {price}</li>}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(products)}
        >
          Edit{" "}
        </button>
        <button onClick={onDelete} className="btn btn-danger btn-sm">
          Delete{" "}
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
