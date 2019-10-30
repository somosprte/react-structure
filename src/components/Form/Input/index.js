import React from 'react';

import { Container, StyledInput, Icon, Text } from './styles';

function Input(props) {
  const { icon, text, responsive, cvv } = props;

  return (
    <Container>
      <div>
        <StyledInput {...props} />
      </div>

      {text && <Text>{text}</Text>}

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
  text: false,
};

export default Input;
