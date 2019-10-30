import React from 'react';

import { Container, StyledInput, Icon } from './styles';

function Input(props) {
  const { icon, responsive, cvv } = props;

  return (
    <Container>
      <div>
        <StyledInput {...props} />
      </div>

      {icon && (
        <Icon cvv={cvv} responsive={responsive}>
          {icon}
        </Icon>
      )}
    </Container>
  );
}

Input.defaultProps = {
  responsive: false,
  icon: false,
};

export default Input;
