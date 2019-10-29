import React from 'react';

import { Page, Breadcrumbs, Panel } from '~/components';

import { Container } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '' }];

function Home(props) {
  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Meus repositórios</h2>
          </Page.Title>
        </Page.Header>

        <Panel>
          <div></div>
        </Panel>
      </Container>
    </Page>
  );
}

export default Home;
