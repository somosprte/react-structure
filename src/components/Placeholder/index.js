import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import PropTypes from 'prop-types';

import Repository from './Repository';

function Placeholder(props) {
  const { ready, component: RenderComponent, children } = props;

  return (
    <ReactPlaceholder showLoadingAnimation={true} ready={ready} delay={5} customPlaceholder={<RenderComponent />}>
      {children}
    </ReactPlaceholder>
  );
}

Placeholder.Repository = Repository;

Placeholder.defaultProps = {
  ready: false,
};

Placeholder.propTypes = {
  ready: PropTypes.bool.isRequired,
  component: PropTypes.element.isRequired,
};

export default Placeholder;
