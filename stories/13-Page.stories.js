import React from 'react';
import { action } from '@storybook/addon-actions';

import { Page, Button } from 'components';

export default {
  title: 'Layout|Page',
};

export const standard = () => (
  <Page>
    <Page.Header>
      <Page.Title>
        <h2>Standard</h2>
      </Page.Title>

      <Page.Actions>
        <Button onClick={action('clicked')}>standard</Button>
      </Page.Actions>
    </Page.Header>
  </Page>
);
