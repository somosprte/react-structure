import React from 'react';

import { Form } from 'components';
import { Search } from 'assets/icons';
import { colors } from 'assets/styles';

export default {
  title: 'Form|Input',
};

export const standard = () => <Form.Input name="standard" placeholder="Standard" />;

export const withIcon = () => (
  <Form.Input name="search" placeholder="O que você busca?" icon={<Search color={colors.black} />} />
);
