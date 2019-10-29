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

            <h2>Home</h2>
          </Page.Title>
        </Page.Header>

        <Panel>
          <div>
            <h1>React-Structure</h1>
          </div>
        </Panel>
      </Container>
    </Page>
  );
}

export default Home;
