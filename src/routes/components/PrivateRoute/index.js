import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { withLayout } from 'hocs';

function PrivateRoute(props) {
  const { component: RenderComponent } = props;

  useEffect(() => {
    console.log(localStorage.getItem('auth_token'));
  }, []);

  return <Route render={props => <RenderComponent {...props} />} />;
}

export default withLayout()(PrivateRoute);
