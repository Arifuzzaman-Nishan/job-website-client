import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import NavigationBar from "./Component/NavigationBar/NavigationBar";

const App = () => {
  return (
    <Router>
      <NavigationBar/>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
