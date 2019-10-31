import React from 'react';

import { action } from '@storybook/addon-actions';

import { Form } from 'components';

export default {
  title: 'Form|Checkbox',
};

export const standard = () => <Form.CheckBox name="checkbox" onClick={action('changed')} />;
