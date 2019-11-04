import React from 'react';

import { Charts } from 'components';

export default {
  title: 'Layout|Charts',
};

export const standard = () => (
  <Charts data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} title="Standard" yTitle="Vendas por mês" />
);

export const line = () => (
  <Charts
    data={[1, 2, 3, 4, 5, 6, 7]}
    xCategories={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
    type="line"
    title="Line"
    yTitle="Vendas por mês"
  />
);

export const color = () => (
  <Charts data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} title="Standard" color="#00F" yTitle="Vendas por mês" />
);
