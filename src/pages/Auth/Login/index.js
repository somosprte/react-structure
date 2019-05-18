import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Creators as AuthActions } from 'store/ducks/auth';

import { Loading } from 'components';
import { Container, Title, Button, Form } from './styles';

const schema = Yup.object().shape({
  username: Yup.string()
    .email('Preencha um e-mail válido')
    .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

function Login() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth.login);

  async function handleSubmit(data) {
    dispatch(AuthActions.loginRequest(data));
  }

  return (
    <Container>
      <Title>Login</Title>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Form.Field>
          <Form.Input name="username" placeholder="Seu e-mail" />
        </Form.Field>

        <Form.Field>
          <Form.Input name="password" type="password" placeholder="Sua senha" />
        </Form.Field>

        <Button type="submit" disabled={login.loading}>
          {login.loading ? <Loading type="button" /> : 'Login'}
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
