import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

function Tooltip(props) {
  const { id, children, tip, ...rest } = props;

  return (
    <>
      <div data-tip data-for={id}>
        {children}
      </div>

      <ReactTooltip id={id} {...rest}>
        {tip}
      </ReactTooltip>
    </>
  );
}

Tooltip.defaultProps = {
  multiline: false,
  border: false,
  disable: false,
  clickable: false,
  place: 'top',
  type: 'dark',
  effect: 'solid',
};

Tooltip.propTypes = {
  multiline: PropTypes.bool,
  border: PropTypes.bool,
  disable: PropTypes.bool,
  clickable: PropTypes.bool,
  id: PropTypes.string.isRequired,
  tip: PropTypes.element.isRequired,
  place: PropTypes.string,
  type: PropTypes.string,
  effect: PropTypes.string,
};

export default Tooltip;
