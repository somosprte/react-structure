import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as RepositoriesActions } from '~/store/ducks/repositories';

import { Page, Breadcrumbs, Panel, Loading } from '~/components';

import { Container } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '' }];

function Home(props) {
  const dispatch = useDispatch();

  const repositories = useSelector(state => state.repositories);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const token = await localStorage.getItem('auth_token');

    token !== null && dispatch(RepositoriesActions.getRepositoriesRequest(token));
  }

  return (
    <Page>
      <Container>
        {console.log(repositories)}
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Meus repositórios</h2>
          </Page.Title>
        </Page.Header>

        <Panel>
          {repositories.loading ? (
            <Loading container size={40} />
          ) : (
            <>
              {repositories.data.map(repo => (
                <h1>{repo.name}</h1>
              ))}
            </>
          )}
        </Panel>
      </Container>
    </Page>
  );
}

export default Home;
