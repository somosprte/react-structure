import React from 'react';
import { Loading, Button, Panel, Table } from 'components';

export default {
  title: 'Loading',
};

export const standard = () => <Loading size={40} />;

export const table = () => (
  <>
    <Loading table size={40} />

    <Table shadowDisabled>
      <thead>
        <Table.Row>
          <Table.Column head>Nome</Table.Column>
          <Table.Column head>Descrição</Table.Column>
          <Table.Column head>De</Table.Column>
          <Table.Column head>Até</Table.Column>
          <Table.Column head>Ativo</Table.Column>
          <Table.Column head />
        </Table.Row>
      </thead>
    </Table>
  </>
);

export const container = () => (
  <Panel>
    <Loading container size={40} />
  </Panel>
);

export const button = () => (
  <Button disabled type="button">
    <Loading type="button" />
  </Button>
);
