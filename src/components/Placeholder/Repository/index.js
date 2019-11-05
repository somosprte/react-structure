import React from 'react';

import { Container, RepositoryTitle, Avatar, Description } from './styles';

function Product(props) {
  return (
    <Container>
      <Avatar className="loading-placeholder" />
      <div>
        <RepositoryTitle className="loading-placeholder"></RepositoryTitle>
        <Description className="loading-placeholder"></Description>
        <Description className="loading-placeholder"></Description>
      </div>
    </Container>
  );
}

export default Product;
