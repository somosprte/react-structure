import React, { useState, useEffect } from 'react';

import { URLParser } from '~/common';

import { Nav, Item, Link } from './styles';

function Menu(props) {
  const { location } = props;
  const [active, setActive] = useState(URLParser(props.location));

  useEffect(() => {
    setActive(URLParser(location));
  }, [location]);

  return (
    <Nav>
      <Item active={active === ''}>
        <Link to="/">Início</Link>
      </Item>

      <Item active={active === 'users'}>
        <Link to="/users">Usuários</Link>
      </Item>

      <Item>
        <Link to="/">Produtos</Link>
      </Item>

      <Item>
        <Link to="/">Configurações</Link>
      </Item>
    </Nav>
  );
}

export default Menu;
