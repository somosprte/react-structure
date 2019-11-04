import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { colors } from 'assets/styles';
import { StyledSwitch } from './styles';

import { useField } from '@rocketseat/unform';

function Switch(props) {
  const { name, initial } = props;
  const switchButton = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [active, setActive] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: switchButton.current,
      path: 'props.checked',
      parseValue: parseSelectedValue,
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [fieldName, active, registerField, parseSelectedValue]);

  useEffect(() => {
    initial && setActive(initial);
  }, [initial]);

  function parseSelectedValue() {
    return String(active);
  }

  return (
    <>
      <StyledSwitch
        checkedIcon={false}
        uncheckedIcon={false}
        height={12}
        width={24}
        handleDiameter={12}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        onColor={colors.lightBlue}
        onHandleColor={colors.white}
        name={fieldName}
        checked={active}
        ref={switchButton}
        onChange={() => setActive(!active)}
      />

      {error && <span>{error}</span>}
    </>
  );
}

Switch.defaultProps = {
  name: '',
  initial: false,
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  initial: PropTypes.bool,
};

export default Switch;
