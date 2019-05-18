import React from 'react';
import { Link } from 'react-router-dom';

export default Page =>
  function Auth(props) {
    return (
      <div>
        <h1>PRIVATE ROUTE</h1>

        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>

          <li>
            <Link to="/users">Users</Link>
          </li>

          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>

        <Page {...props} />
      </div>
    );
  };
