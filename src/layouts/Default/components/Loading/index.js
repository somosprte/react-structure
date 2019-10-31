import React from 'react';

import { Loading as Spinner } from '~/components';

import { Container } from './styles';

import LogoImage from '~/assets/images/logo.svg';

function Loading(props) {
  return (
    <Container {...props}>
      <div>
        <img src={LogoImage} />
        <Spinner size={20} />
      </div>
    </Container>
  );
}

export default Loading;
