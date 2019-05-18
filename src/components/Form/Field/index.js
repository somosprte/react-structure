import React from 'react';

import { StyledField } from './styles';

function Field(props) {
  const { children } = props;

  return <StyledField>{children}</StyledField>;
}

export default Field;
