import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Usuario from '../pages/Usuario';
import FormUser from '../pages/Usuario/Form';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/users" exact component={Usuario} isPrivate />
        <Route path="/users/:id" exact component={FormUser} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
