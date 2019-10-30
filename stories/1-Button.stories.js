import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'components';
import { FaTrashAlt } from 'react-icons/fa';

export default {
  title: 'Button',
};

export const standard = () => <Button onClick={action('clicked')}>standard</Button>;

export const outline = () => (
  <Button outline onClick={action('clicked')}>
    Outline
  </Button>
);

export const color = () => (
  <Button color="warning" onClick={action('clicked')}>
    Outline
  </Button>
);

export const text = () => (
  <Button text onClick={action('clicked')}>
    Text
  </Button>
);

export const icon = () => (
  <Button icon onClick={action('clicked')}>
    <FaTrashAlt size={10} />
  </Button>
);

export const facebook = () => (
  <Button facebook onClick={action('clicked')}>
    Login com Facebook
  </Button>
);

export const large = () => (
  <Button large onClick={action('clicked')}>
    Large
  </Button>
);
