import React from 'react';

import { Form as UnformForm } from '@rocketseat/unform';

import Field from './Field';
import Label from './Label';
import Input from './Input';
import Scope from './Scope';

const Form = props => {
  return <UnformForm {...props} />;
};

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.Scope = Scope;

export default Form;
