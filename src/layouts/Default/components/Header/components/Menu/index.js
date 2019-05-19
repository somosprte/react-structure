import React from 'react';

import { Nav, Item, Link } from './styles';

const Menu = () => {
  return (
    <Nav>
      <Item>
        <Link to="/">Início</Link>
      </Item>

      <Item active>
        <Link to="/">Exemplo</Link>
      </Item>

      <Item>
        <Link to="/">Produtos</Link>
      </Item>

      <Item>
        <Link to="/">Configurações</Link>
      </Item>
    </Nav>
  );
};

export default Menu;
