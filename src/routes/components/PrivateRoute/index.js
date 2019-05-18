import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withLayout } from 'hocs';

class PrivateRoute extends Component {
  render() {
    const { component: RenderComponent } = this.props;

    return <Route render={props => <RenderComponent {...props} />} />;
  }
}

export default withLayout()(PrivateRoute);
