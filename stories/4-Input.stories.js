import React from 'react';

import { Form } from 'components';
import { Search } from 'assets/icons';
import { colors } from 'assets/styles';
import CVV from 'assets/images/cvc.png';

export default {
  title: 'Input',
};

export const standard = () => (
  <Form>
    <Form.Input name="standard" placeholder="standard" />
  </Form>
);

export const withImage = () => (
  <Form>
    <Form.Input cvv name="cvv" placeholder="CVV" maxLength="4" icon={<img src={CVV} />} />
  </Form>
);

export const withIcon = () => (
  <Form>
    <Form.Input name="search" placeholder="O que você busca?" icon={<Search color={colors.black} />} />
  </Form>
);
