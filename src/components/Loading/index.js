import React from 'react';
import PropTypes from 'prop-types';

import { Container, Spinner } from './styles';

const Loading = props => {
  const { size } = props;

  return (
    <Container {...props}>
      <Spinner size={size} />
    </Container>
  );
};

Loading.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string,
  container: PropTypes.bool,
  table: PropTypes.bool,
};

Loading.defaultProps = {
  size: 0,
  type: '',
  container: false,
  table: false,
};

export default Loading;
