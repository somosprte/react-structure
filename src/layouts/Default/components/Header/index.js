import React from 'react';

import { Search, Menu } from './components';

import { Container, Logo, Navigation } from './styles';

import LogoImage from '~/assets/images/logo.svg';

const Header = props => {
  return (
    <Container>
      <div>
        <Logo src={LogoImage} />

        <Navigation>
          <Search />
          <Menu {...props} />
        </Navigation>

        <div>Options</div>
      </div>
    </Container>
  );
};

export default Header;
