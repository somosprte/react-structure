import React from 'react';

import { StyledLabel } from './styles';

function Label(props) {
  const { children } = props;

  return <StyledLabel>{children}</StyledLabel>;
}

export default Label;
