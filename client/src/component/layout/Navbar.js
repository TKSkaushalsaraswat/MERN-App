import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ProductContext from "../../context/product/productContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const productContext = useContext(ProductContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearProducts } = productContext;

  const onLogout = () => {
    logout();
    clearProducts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>MERN APP</h1>
      <ul>{isAuthenticated ? authLinks : guestLink}</ul>
    </div>
  );
};

export default Navbar;
