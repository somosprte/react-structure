import React from 'react';
import PropTypes from 'prop-types';

import { Container, StyledInput, Icon } from './styles';

function Input(props) {
  const { icon } = props;

  return (
    <Container>
      <div>
        <StyledInput {...props} />
      </div>

      {icon !== null && <Icon>{icon}</Icon>}
    </Container>
  );
}

Input.defaultProps = {
  name: '',
  placeholder: '',
  icon: null,
  onChange: () => {},
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  onChange: PropTypes.func,
};

export default Input;
