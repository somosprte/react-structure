import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'components';

export default {
  title: 'Layout|Button',
};

export const standard = () => <Button onClick={action('clicked')}>Standard</Button>;
