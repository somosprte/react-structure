import React from 'react';

import { Modal } from 'components';

export default {
  title: 'Layout|Modal',
};

export const standard = () => (
  <Modal visible={true} setVisible={() => {}}>
    <div>
      <h1>some text on modal</h1>
    </div>
  </Modal>
);
