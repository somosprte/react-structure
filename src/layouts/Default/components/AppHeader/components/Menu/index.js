import React from 'react';

import { Container, Item, SubItem, Link, BoxMenu } from './styles';

function Menu(props) {
  const { showMenu } = props;

  return (
    <Container showMenu={showMenu}>
      <BoxMenu>
        <Item>
          <Link to="/">Dashboard</Link>
        </Item>

        <Item>Ecommerce</Item>

        <SubItem>
          <Link to="/">Categorias</Link>
        </SubItem>

        <SubItem>
          <Link to="/">Campanhas</Link>
        </SubItem>

        <SubItem>
          <Link to="/">Produtos</Link>
        </SubItem>

        <SubItem>
          <Link to="/">Pedidos</Link>
        </SubItem>

        <Item>Conteúdo</Item>

        <SubItem>
          <Link to="/">Banners</Link>
        </SubItem>

        <SubItem>
          <Link to="/">Templates de e-mail</Link>
        </SubItem>

        <Item>
          <Link to="/">Eventos</Link>
        </Item>
      </BoxMenu>
    </Container>
  );
}

export default Menu;
