import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { StyledMaskedInput } from './styles';

function MaskedInput(props) {
  const { name, mask, placeholder } = props;

  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      clearValue: pickerRef => {
        pickerRef.setInputValue(null);
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledMaskedInput
        name={fieldName}
        mask={mask}
        value={value}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}

MaskedInput.defaultProps = {
  name: '',
  mask: '',
  placeholder: '',
};

MaskedInput.propTypes = {
  name: PropTypes.string.isRequired,
  mask: PropTypes.string,
  placeholder: PropTypes.string,
};

export default MaskedInput;
