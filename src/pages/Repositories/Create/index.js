import React, { useState } from 'react';
import swal from 'sweetalert';
import * as Yup from 'yup';
import { api } from 'services';

import { Page, Panel, Breadcrumbs } from 'components';

import { Form } from 'pages/Repositories/components';

const schema = Yup.object().shape({
  repository: Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
  }),
});

const breadcrumbs = [
  { name: 'inicio', to: '/' },
  { name: 'meus repositórios', to: '/repositories' },
  { name: 'criar repositório', to: '' },
];

function Create(props) {
  const [saving, setSaving] = useState(false);
  const [initialData, setInitialData] = useState({
    repository: {
      title: '',
      description: '',
    },
  });

  async function handleSubmit(data) {
    setSaving(true);

    try {
      const { history } = props;

      // await api.post('', {
      //   ...data,
      //   repository: {
      //     title: data.repository.title,
      //     description: data.repository.description,
      //   },
      // });

      setSaving(false);
      history.push('/repositories');
      swal('Adicionado', 'Repositório adicionado com sucesso', 'success');
    } catch (error) {
      setSaving(false);
      swal('Ops, algo deu errado', 'Falha ao criar repositório', 'error');
    }
  }

  return (
    <Page>
      <Page.Header>
        <Page.Title>
          <Breadcrumbs data={breadcrumbs} />

          <h2>Criar repositório</h2>
        </Page.Title>
      </Page.Header>

      <Panel>
        <Form data={initialData} schema={schema} saving={saving} onSubmit={handleSubmit} />
      </Panel>
    </Page>
  );
}

export default Create;
