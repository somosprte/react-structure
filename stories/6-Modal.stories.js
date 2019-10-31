import React from 'react';

import { action } from '@storybook/addon-actions';

import { Modal } from 'components';

export default {
  title: 'Layout|Modal',
};

export const standard = () => (
  <Modal visible={true} setVisible={action('close Modal')}>
    <div>
      <h1>some text on modal</h1>
    </div>
  </Modal>
);
