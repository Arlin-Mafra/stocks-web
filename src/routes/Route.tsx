import React from 'react';
import {
  RouteProps as RouteDomProps,
  Route as DomRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface RouteProps extends RouteDomProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <DomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: { location } },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
