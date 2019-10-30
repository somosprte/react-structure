import React from 'react';
import PropTypes from 'prop-types';

import { Container, Box, Content, Overlay } from './styles';

function Modal(props) {
  const { children, setVisible, visible } = props;

  return (
    <>
      {visible && (
        <Container>
          <Overlay onClick={() => setVisible(false)} />

          <Box>
            <Content>{children}</Content>
          </Box>
        </Container>
      )}
    </>
  );
}

Modal.defaultProps = {
  setVisible: () => {},
  visible: false,
};

Modal.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Modal;
