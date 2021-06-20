import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import JobPost from "./Component/JobPost/JobPost";
import Login from "./Component/Login/Login";
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
    </postContext.Provider>
  );
};

export default App;
