import React from 'react';

import { action } from '@storybook/addon-actions';

import { Modal, Button } from 'components';

export default {
  title: 'Layout|Modal',
};

export const standard = () => (
  <Modal visible={true} setVisible={action('close modal')}>
    <h1>some text on modal</h1>
  </Modal>
);

export const header = () => (
  <Modal visible={true} setVisible={action('close modal')}>
    <>
      <span>title</span>

      <button onClick={action('close modal')}>X</button>
    </>

    <h1>some text on modal</h1>
  </Modal>
);

export const footer = () => (
  <Modal noHeader visible setVisible={action('close modal')}>
    <h1>some text on modal</h1>

    <>
      <Button text onClick={action('close modal')}>
        Fechar
      </Button>
      <Button onClick={action('save and close modal')}>Salvar</Button>
    </>
  </Modal>
);

export const full = () => (
  <Modal visible setVisible={action('close modal')}>
    <>
      <span>title</span>

      <button onClick={action('close modal')}>X</button>
    </>

    <h1>some text on modal</h1>

    <>
      <Button text onClick={action('close modal')}>
        Fechar
      </Button>
      <Button onClick={action('save and close modal')}>Salvar</Button>
    </>
  </Modal>
);
