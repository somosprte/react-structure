import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import history from './history';

import * as Pages from 'pages';

import { AuthRoute, PrivateRoute } from './components';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <AuthRoute path="/login" component={Pages.Auth.Login} exact />

      <PrivateRoute path="/" component={Pages.Dashboard} exact />
      <PrivateRoute path="/users" component={Pages.Users} exact />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
