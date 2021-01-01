import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import ProductState from "./context/product/ProductState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Alerts from "./component/layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./component/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ProductState>
        <AlertState>
          <Router>
            <Fragment className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ProductState>
    </AuthState>
  );
};

export default App;
