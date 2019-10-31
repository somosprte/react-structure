import React from 'react';

import { Form as UnformForm } from '@rocketseat/unform';

import Field from './Field';
import Label from './Label';
import Input from './Input';
import Scope from './Scope';
import Buttons from './Buttons';
import Select from './Select';
import Switch from './Switch';
import MaskedInput from './MaskedInput';
import Radio from './Radio';
import CheckBox from './CheckBox';

const Form = props => {
  return <UnformForm {...props} />;
};

Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.Scope = Scope;
Form.Buttons = Buttons;
Form.Select = Select;
Form.Switch = Switch;
Form.MaskedInput = MaskedInput;
Form.Radio = Radio;
Form.CheckBox = CheckBox;

export default Form;
