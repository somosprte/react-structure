import React from 'react';

import { Page, Charts, Breadcrumbs } from 'components';

import { Container } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '' }];

function Home(props) {
  return (
    <Page>
      <Page.Header>
        <Page.Title>
          <Breadcrumbs data={breadcrumbs} />

          <h2>Dashboard</h2>
        </Page.Title>
      </Page.Header>

      <Container>
        <Charts data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} title="teste" yTitle="Vendas por mês" />
        <Charts data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} type="line" title="teste" yTitle="Vendas por mês" />
      </Container>
    </Page>
  );
}

export default Home;
