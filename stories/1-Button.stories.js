import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'components';
import { FaTrashAlt } from 'react-icons/fa';

export default {
  title: 'Layout|Button',
};

export const standard = () => <Button onClick={action('clicked')}>Standard</Button>;

export const color = () => (
  <Button color="error" onClick={action('clicked')}>
    Color
  </Button>
);

export const outline = () => (
  <Button outline onClick={action('clicked')}>
    Outline
  </Button>
);

export const text = () => (
  <Button text onClick={action('clicked')}>
    Text
  </Button>
);

export const large = () => (
  <Button large onClick={action('clicked')}>
    Large
  </Button>
);

export const icon = () => (
  <Button icon onClick={action('clicked')}>
    <FaTrashAlt />
  </Button>
);

export const disabled = () => (
  <Button disabled onClick={action('clicked')}>
    Disabled
  </Button>
);
