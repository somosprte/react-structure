import React, { useState } from 'react';
import * as Yup from 'yup';
import swal from 'sweetalert';
import { api } from 'services';

import { Loading } from 'components';
import { Container, Title, Button, Form } from './styles';

const schema = Yup.object().shape({
  username: Yup.string()
    .email('Preencha um e-mail válido')
    .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

function Login() {
  const [submiting, setSubmiting] = useState(false);

  async function handleSubmit(data) {
    try {
      setSubmiting(true);
      const response = await api.post('auth/v2/users/login', data);
      setSubmiting(false);
    } catch (error) {
      const { message } = error.response.data.error;

      swal('Ops, algo deu errado', message, 'error');
    }
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

        <Button type="submit" disabled={submiting}>
          {submiting ? <Loading type="button" /> : 'Login'}
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
