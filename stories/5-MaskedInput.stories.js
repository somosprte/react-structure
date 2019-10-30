import React from 'react';

import { Form } from 'components';

export default {
  title: 'Masked Input',
};

export const cpf = () => (
  <Form>
    <Form.MaskedInput name="cpf" mask="111.111.111-11" placeholder="CPF" />
  </Form>
);

export const birthday = () => (
  <Form>
    <Form.MaskedInput name="birthday" mask="11/11/1111" placeholder="Birthday" />
  </Form>
);
