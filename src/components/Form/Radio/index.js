import React from 'react';

import { FaCheck } from 'react-icons/fa';

import { colors } from 'assets/styles';

import { Label, StyledInput, Span } from './styles';

function Radio(props) {
  const { type } = props;

  return (
    <Label>
      <StyledInput {...props} type={type} />
      <Span>
        <FaCheck size={8} color={colors.white} />
      </Span>
    </Label>
  );
}

Radio.defaultProps = {
  type: 'radio',
};

export default Radio;
