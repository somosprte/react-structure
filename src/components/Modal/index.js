import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Overlay, Box, Header, Content, Footer } from './styles';

function Modal(props) {
  const { noHeader, visible, children, setVisible } = props;

  const [content, setContent] = useState(['', '', '']);

  useEffect(() => {
    !children.length ? setContent(['', children, '']) : noHeader ? setContent(['', ...children]) : setContent(children);
  }, [children]);

  return (
    <>
      {visible && (
        <Container>
          <Overlay onClick={() => setVisible(false)} />

          <Box>
            <Header>{content[0]}</Header>

            <Content>{content[1]}</Content>

            <Footer>{content[2]}</Footer>
          </Box>
        </Container>
      )}
    </>
  );
}

Modal.defaultProps = {
  visible: false,
  noHeader: false,
  setVisible: () => {},
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  noHeader: PropTypes.bool,
  setVisible: PropTypes.func.isRequired,
};

export default Modal;
