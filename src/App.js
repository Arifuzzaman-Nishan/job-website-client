import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import JobPost from "./Component/JobPost/JobPost";
import Login from "./Component/Login/Login";
import NavigationBar from "./Component/NavigationBar/NavigationBar";
import Package from "./Component/Package/Package";
import StripePayment from "./Component/StripePayment/StripePayment";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/package">
          <Package />
        </Route>
        <Route path="/payment">
          <StripePayment />
        </Route>
        <Route path="/jobpost">
          <JobPost />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
