import React from 'react';

import { Modal } from 'components';

export default {
  title: 'Layout|Modal',
};

export const standard = () => (
  <Modal visible={true}>
    <div>
      <h1>some text on modal</h1>
    </div>
  </Modal>
);
