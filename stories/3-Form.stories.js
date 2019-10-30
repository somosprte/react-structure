import React from 'react';
import { action } from '@storybook/addon-actions';

import { Form, Button } from 'components';

export default {
  title: 'Form',
};

export const checkbox = () => (
  <Form>
    <Form.CheckBox name="checkbox" />
  </Form>
);

export const buttonsHorizontal = () => (
  <Form.Buttons>
    <Button outline onClick={action('clicked')}>
      outline
    </Button>
    <Button onClick={action('clicked')}>standard</Button>
  </Form.Buttons>
);

export const buttonsVertical = () => (
  <Form.Buttons vertical>
    <Button outline onClick={action('clicked')}>
      outline
    </Button>
    <Button onClick={action('clicked')}>standard</Button>
  </Form.Buttons>
);

export const radio = () => (
  <Form>
    <Form.Radio name="radio" />
  </Form>
);

export const label = () => (
  <Form.Field>
    <Form.Label>Label</Form.Label>
    <Form.Input name="input" placeholder="Input" />
  </Form.Field>
);

export const switchInput = () => (
  <Form>
    <Form.Switch name="switch" />
  </Form>
);
