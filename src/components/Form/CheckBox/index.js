import React from 'react';

import { FaCheck } from 'react-icons/fa';

import { colors } from 'assets/styles';

import { Label, StyledInput, Span } from './styles';

function CheckBox(props) {

  return (
    <Label>
      <StyledInput {...props} type="checkbox" />
      <Span>
        <FaCheck size={8} color={colors.white} />
      </Span>
    </Label>
  );
}

export default CheckBox;
