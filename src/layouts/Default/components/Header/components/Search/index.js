import React from 'react';

import { Form } from 'components';

import { Container } from './styles';

function Search(props) {
  return (
    <Container>
      <Form onSubmit={() => {}}>
        <Form.Input name="search" placeholder="Buscar em repositórios" />
      </Form>
    </Container>
  );
}

export default Search;
