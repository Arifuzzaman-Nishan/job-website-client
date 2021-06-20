import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import NavigationBar from "./Component/NavigationBar/NavigationBar";
import StripePayment from "./Component/StripePayment/StripePayment";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <StripePayment></StripePayment>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
