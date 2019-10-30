import React from 'react';
import { components } from 'react-select';

import { ArrowSelectDown } from 'assets/icons';

import { Container } from './styles';

function DropdownIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <Container>
        <ArrowSelectDown />
      </Container>
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
