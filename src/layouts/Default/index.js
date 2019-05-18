import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as AuthActions } from 'store/ducks/auth';
import { Creators as UsersActions } from 'store/ducks/users';

import { Button } from 'components';

import { global as Global } from 'assets/styles';

export default Page =>
  function Auth(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.logged);

    useEffect(() => {
      dispatch(UsersActions.getUserLoggedRequest());
    }, [dispatch]);

    function handleLogout() {
      dispatch(AuthActions.logoutRequest());
    }

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

              <Button color="error" onClick={handleLogout}>
                Logout
              </Button>
            </ul>

            <Page {...props} />
          </div>
        )}
      </>
    );
  };
