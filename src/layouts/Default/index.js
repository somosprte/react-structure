import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as UsersActions } from 'store/ducks/users';

import { global as Global } from 'assets/styles';

export default Page =>
  function Auth(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.logged);

    useEffect(() => {
      dispatch(UsersActions.getUserLoggedRequest());
    }, [dispatch]);

    return (
      <>
        <Global.Styles />
        {user.loading ? (
          <div>Carregando</div>
        ) : (
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
        )}
      </>
    );
  };
