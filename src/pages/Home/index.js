import React from 'react';

import { Page, Charts } from 'components';

import { Container } from './styles';

function Home(props) {
  return (
    <Page>
      <Container>
        <Charts data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} title="teste" yTitle="Vendas por mês" />
        <Charts data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} type="line" title="teste" yTitle="Vendas por mês" />
      </Container>
    </Page>
  );
}

export default Home;
