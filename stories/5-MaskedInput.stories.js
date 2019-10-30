import React from 'react';

import { Form } from 'components';

export default {
  title: 'Form|Masked Input',
};

export const cpf = () => <Form.MaskedInput name="cpf" mask="111.111.111-11" placeholder="CPF" />;

export const birthday = () => <Form.MaskedInput name="birthday" mask="11/11/1111" placeholder="Birthday" />;
