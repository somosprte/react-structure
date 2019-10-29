import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import { Loading } from '~/components';
import LogoImage from '~/assets/images/logo.jpg';

import { Container, Title, Button, Form, Logo } from './styles';

const schema = Yup.object().shape({
  username: Yup.string()
    // .email()
    .required(),
  // password: Yup.string().required(),
});

function Login() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth.login);

  function handleLogin(data) {
    dispatch(AuthActions.loginRequest(data));
  }

  function handleLoginFacebook(profile) {
    profile.id && dispatch(AuthActions.loginRequest({ profile }, 'facebook'));
  }

  return (
    <Container>
      <Logo src={LogoImage} />

      <Title>
        Login
        <span>Insira o seu usuário do Github:</span>
      </Title>

      <Form schema={schema} onSubmit={handleLogin}>
        <Form.Field>
          <Form.Input name="username" placeholder="Usuário" autoComplete="off" />
        </Form.Field>

        {/* <Form.Field>
          <Form.Input name="password" type="password" placeholder="Sua senha" />
        </Form.Field> */}

        <Form.Buttons vertical>
          <Button type="submit" disabled={login.loading} large>
            {login.loading ? <Loading type="button" /> : 'Login'}
          </Button>

          <FacebookLogin
            appId={process.env.FACEBOOK_APP_ID}
            disableMobileRedirect={true}
            fields="id,first_name,last_name,email"
            callback={profile => handleLoginFacebook(profile)}
            render={props => (
              <Button facebook large onClick={props.onClick}>
                Login com Facebook
              </Button>
            )}
          />
        </Form.Buttons>
      </Form>
    </Container>
  );
}

export default Login;
