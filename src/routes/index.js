import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import * as Pages from 'pages';

// import { AuthRoute, PrivateRoute } from './components';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Pages.Auth.Login} exact />

      <Route path="/" component={Pages.Dashboard} exact />
    </Switch>
  </Router>
);

export default Routes;
