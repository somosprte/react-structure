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
        <Link to="/">Dashboard</Link>
      </Title>

      <Title>
        <span>Ecommerce</span>

        <ul>
          <Item>
            <Link /* active={active === ''} */ to="/">Categorias</Link>
          </Item>

          <Item>
            <Link /* active={active === ''} */ to="/">Campanhas</Link>
          </Item>

          <Item>
            <Link /* active={active === ''} */ to="/">Produtos</Link>
          </Item>

          <Item>
            <Link /* active={active === ''} */ to="/">Pedidos</Link>
          </Item>
        </ul>
      </Title>

      <Title>
        <span>Conteúdo</span>

        <ul>
          <Item>
            <Link /* active={active === ''} */ to="/">Banners</Link>
          </Item>

          <Item>
            <Link /* active={active === ''} */ to="/">Templates de e-mail</Link>
          </Item>
        </ul>
      </Title>

      <Title /* active={active === ''} */>
        <Link to="/">Eventos</Link>
      </Title>
    </Nav>
  );
}

export default Menu;
