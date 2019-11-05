import React, { useEffect, useState } from 'react';
import { api } from 'services';

import { Page, Breadcrumbs, Panel, Button, Tooltip, Placeholder } from 'components';

import { Container, Repository, RepositoryTitle, Avatar, Description } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '' }];

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const token = await localStorage.getItem('auth_token');

      if (token !== null) {
        const response = await api.get(`users/${token}/repos`);

        const { data } = response;

        setData(data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Meus repositórios</h2>
          </Page.Title>

          <Page.Actions>
            <Tooltip
              id="teste"
              tip={
                <div>
                  <span>Alguma dica sobre o botão</span>
                </div>
              }
            >
              <Button onClick={() => {}}>Teste de tooltip</Button>
            </Tooltip>
          </Page.Actions>
        </Page.Header>

        <Panel>
          {data.map(repo => (
            <Placeholder ready={!loading} component={Placeholder.Repository}>
              {!loading && (
                <Repository key={repo.id}>
                  <Avatar src={repo.owner.avatar_url} />
                  <div>
                    <RepositoryTitle>{repo.name}</RepositoryTitle>
                    <Description>{repo.description}</Description>
                  </div>
                </Repository>
              )}
            </Placeholder>
          ))}
        </Panel>
      </Container>
    </Page>
  );
}

export default Home;
