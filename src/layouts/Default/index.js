import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';
import { Creators as UsersActions } from '~/store/ducks/users';

import { Button } from '~/components';
import { Header } from './components';

import { global as Global } from '~/assets/styles';
import { Container } from './styles';

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
          <Container>
            <div>
              <Header />

              <Page {...props} />
            </div>
          </Container>
        )}
      </>
    );
  };
