import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as RepositoriesActions } from 'store/ducks/repositories';

import { Page, Breadcrumbs, Panel, Loading, Button, Tooltip } from 'components';

import { Container, Repository, RepositoryTitle, Avatar, Description } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '' }];

function Home(props) {
  const dispatch = useDispatch();

  const repositories = useSelector(state => state.repositories);

  async function loadData() {
    const token = await localStorage.getItem('auth_token');

    token !== null && dispatch(RepositoriesActions.getRepositoriesRequest(token));
  }

  useEffect(() => {
    loadData();
  }, []);

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
          {repositories.loading ? (
            <Loading container size={40} />
          ) : (
            <>
              {repositories.data.map(repo => (
                <Repository key={repo.id}>
                  <Avatar src={repo.owner.avatar_url} />
                  <div>
                    <RepositoryTitle>{repo.name}</RepositoryTitle>
                    <Description>{repo.description}</Description>
                  </div>
                </Repository>
              ))}
            </>
          )}
        </Panel>
      </Container>
    </Page>
  );
}

export default Home;