import React from 'react';

import { action } from '@storybook/addon-actions';

import { Form } from 'components';
import { Search } from 'assets/icons';
import { colors } from 'assets/styles';

export default {
  title: 'Form|Input',
};

export const standard = () => <Form.Input name="standard" placeholder="Standard" onChange={action('changed input')} />;

export const withIcon = () => (
  <Form.Input
    name="search"
    placeholder="O que você busca?"
    icon={<Search color={colors.black} />}
    onChange={action('changed input')}
  />
);
