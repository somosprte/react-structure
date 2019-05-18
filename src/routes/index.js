import React from 'react';

import { Router, Switch } from 'react-router-dom';
import history from './history';

import * as Pages from 'pages';

import { AuthRoute, PrivateRoute } from './components';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <AuthRoute path="/login" component={Pages.Auth.Login} exact />

      <PrivateRoute path="/" component={Pages.Dashboard} exact />
      <PrivateRoute path="/users" component={Pages.Users} exact />
    </Switch>
  </Router>
);

export default Routes;
