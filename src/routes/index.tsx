import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
