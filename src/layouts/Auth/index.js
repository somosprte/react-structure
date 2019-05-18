import React from 'react';

import { global as Global } from 'assets/styles';

export default Page =>
  function Auth(props) {
    return (
      <div>
        <Global.Styles />
        <h1>AUTH ROUTE</h1>

        <Page {...props} />
      </div>
    );
  };
