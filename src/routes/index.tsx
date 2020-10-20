import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Usuario from '../pages/Usuario';
import FormUser from '../pages/Usuario/Form';
import Category from '../pages/Category';
import FormCategory from '../pages/Category/Form';
import Product from '../pages/Product';

interface RouteParams{
  category_id:string;
}

const Routes: React.FC = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/users" exact component={Usuario} isPrivate />
        <Route path="/users/:id" exact component={FormUser} isPrivate />
        <Route path="/categories" exact component={Category} isPrivate />
        <Route
          path="/categories/:id"
          exact
          component={FormCategory}
          isPrivate
        />
        <Route path="/products" exact component={Product} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
