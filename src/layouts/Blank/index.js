import React from 'react';

import { global as Global } from 'assets/styles';
import { Container } from './styles';

export default Page =>
  function Blank(props) {
    return (
      <>
        <Global.Styles />
        <Container>
          <div>
            <Page {...props} />
          </div>
        </Container>
      </>
    );
  };
