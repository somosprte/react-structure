import React, { useState, useEffect } from 'react';

import { URLParser } from '~/common';

import { Nav, Title, Item, Link } from './styles';

function Menu(props) {
  const { location } = props;
  const [active, setActive] = useState(URLParser(props.location));

  useEffect(() => {
    setActive(URLParser(location));
  }, [location]);

  return (
    <Nav>
      <Title active={active === ''}>
        <Link to="/">Repositórios</Link>
      </Title>

      <Title>
        <span>Exemplo</span>

        <ul>
          <Item>
            <Link to="/">Categorias</Link>
          </Item>

          <Item>
            <Link to="/">Campanhas</Link>
          </Item>

          <Item>
            <Link to="/">Produtos</Link>
          </Item>

          <Item>
            <Link to="/">Pedidos</Link>
          </Item>
        </ul>
      </Title>
    </Nav>
  );
}

export default Menu;
