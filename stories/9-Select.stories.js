import React from 'react';

import { Form } from 'components';

export default {
  title: 'Form|Select',
};

export const standard = () => (
  <Form.Select name="standard" placeholder="Standard" options={[{ label: 'Select', value: 1 }]} />
);

export const async = () => (
  <Form.Select async name="async" placeholder="Async" options={[{ label: 'Select', value: 1 }]} />
);

export const multiple = () => (
  <Form.Select
    multiple
    defaultValue={{ label: 'teste', value: 1 }}
    name="multiple"
    placeholder="Async"
    options={[{ label: 'Select', value: 2 }]}
  />
);

export const noIndicator = () => (
  <Form.Select noIndicator name="noIndicator" placeholder="No Indicator" options={[{ label: 'Select', value: 1 }]} />
);

export const noBorder = () => (
  <Form.Select noBorder name="noBorder" placeholder="No Border" options={[{ label: 'Select', value: 1 }]} />
);

export const noOptionMessage = () => (
  <Form.Select
    name="noOptionMessage"
    placeholder="No Option Message"
    options={[]}
    noOptionsMessage={() => <span>No option message here</span>}
  />
);
