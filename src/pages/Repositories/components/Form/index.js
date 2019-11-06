import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Loading, Form } from 'components';

import { Container, Grid } from './styles';

function CustomForm(props) {
  const { data, schema, saving, onSubmit } = props;

  return (
    <Container>
      <Form schema={schema} initialData={data} onSubmit={onSubmit}>
        <Form.Scope path="repository">
          <Grid>
            <div>
              <Form.Field>
                <Form.Label>Título</Form.Label>
                <Form.Input name="title" placeholder="Digite o nome do repositório" />
              </Form.Field>

              <Form.Field>
                <Form.Label>Descrição</Form.Label>
                <Form.Input multiline name="description" placeholder="Digite uma descrição para o repositório" />
              </Form.Field>
            </div>
          </Grid>
        </Form.Scope>

        <Form.Buttons>
          <Button text>
            <Link to="/repositories">Voltar</Link>
          </Button>

          <Button type="submit" disabled={saving}>
            {saving ? <Loading type="button" /> : 'Salvar e concluir'}
          </Button>
        </Form.Buttons>
      </Form>
    </Container>
  );
}

export default CustomForm;
