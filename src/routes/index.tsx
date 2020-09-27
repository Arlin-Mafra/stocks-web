import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
