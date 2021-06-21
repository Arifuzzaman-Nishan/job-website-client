import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Component/Admin/Admin";
import Home from "./Component/Home/Home";
import JobApply from "./Component/JobApply/JobApply";
import JobPost from "./Component/JobPost/JobPost";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/Login/PrivateRoute/PrivateRoute";
import NavigationBar from "./Component/NavigationBar/NavigationBar";
import Package from "./Component/Package/Package";
import StripePayment from "./Component/StripePayment/StripePayment";

export const postContext = createContext();

const App = () => {
  const [postDetails, setPostDetails] = useState({});
  return (
    <postContext.Provider value={[postDetails, setPostDetails]}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/package">
            <Package />
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <StripePayment />
          </PrivateRoute>
          <PrivateRoute path="/jobpost">
            <JobPost />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/jobapply">
            <JobApply></JobApply>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </postContext.Provider>
  );
};

export default App;
