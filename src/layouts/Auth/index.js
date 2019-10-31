import React from 'react';

import { global as Global } from '~/assets/styles';
import { Container, Logo } from './styles';

import LogoImage from '~/assets/images/logo.svg';

export default Page =>
  function Auth(props) {
    return (
      <>
        <Global.Styles />
        <Container>
          <div>
            <Logo src={LogoImage} />

            <Page {...props} />
          </div>
        </Container>
      </>
    );
  };
