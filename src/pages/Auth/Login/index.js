import React from 'react';

import { Form } from 'components';
// import { Form, Input } from '@rocketseat/unform';

import { Container, Title } from './styles';

const Login = () => (
  <Container>
    <Title>Login</Title>

    <Form>
      <Form.Field>
        <Form.Input name="username" placeholder="Seu e-mail" />
      </Form.Field>

      <Form.Field>
        <Form.Input name="password" placeholder="Sua senha" />
      </Form.Field>
    </Form>
  </Container>
);

export default Login;
