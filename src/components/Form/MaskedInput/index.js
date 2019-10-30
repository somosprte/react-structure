import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { StyledMaskedInput } from './styles';

function MaskedInput(props) {
  const { name, mask, onComplete, placeholder } = props;

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
  }, [ref.current, fieldName]);

  useEffect(() => {
    onComplete && value && value.replace(/[^0-9]/g, '').length === 8 && onComplete(value.replace(/[^0-9]/g, ''));
  }, [value]);

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

export default MaskedInput;
