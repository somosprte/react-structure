import React from 'react';

import { global as Global } from 'assets/styles';
import { Container } from './styles';

import BackgroundImage from 'assets/images/background.jpeg';

export default Page =>
  function Auth(props) {
    return (
      <>
        <Global.Styles />
        <Container image={BackgroundImage}>
          <div>
            <Page {...props} />
          </div>
        </Container>
      </>
    );
  };
