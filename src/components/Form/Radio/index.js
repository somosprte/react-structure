import React from 'react';
import PropTypes from 'prop-types';

import { FaCheck } from 'react-icons/fa';

import { colors } from 'assets/styles';

import { Label, StyledInput, Span } from './styles';

function Radio(props) {
  return (
    <Label>
      <StyledInput {...props} type="radio" />
      <Span>
        <FaCheck size={8} color={colors.white} />
      </Span>
    </Label>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Radio.defaultProps = {
  name: '',
  value: '',
  onClick: () => {},
};

export default Radio;
