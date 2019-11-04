import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

function Button(props) {
  return <StyledButton {...props} />;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  large: PropTypes.bool,
  text: PropTypes.bool,
  icon: PropTypes.bool,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  color: 'primary',
  large: false,
  text: false,
  icon: false,
  outline: false,
};

export default Button;
