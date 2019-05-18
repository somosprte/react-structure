import React from 'react';

export default Page =>
  function Auth(props) {
    return (
      <div>
        <h1>AUTH ROUTE</h1>

        <Page {...props} />
      </div>
    );
  };
