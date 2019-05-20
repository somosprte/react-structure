import React from 'react';

import { Form } from '~/components';

import { Container } from './styles';

const Search = () => {
  return (
    <Container>
      <Form>
        <Form.Input name="search" placeholder="Buscar em produtos" />
      </Form>
    </Container>
  );
};

export default Search;
