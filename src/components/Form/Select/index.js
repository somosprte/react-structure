import React, { useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';
import Async from 'react-select/async';

import { Loading, Form } from 'components';
import { DropdownIndicator } from './components';
import { colors } from 'assets/styles';

import { Container, StyledSelect } from './styles';

function Select(props) {
  const {
    name,
    per,
    label,
    options,
    multiple,
    async,
    disabled,
    placeholder,
    noIndicator,
    noBorder,
    basket,
    sort,
    ...rest
  } = props;
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const styles = {
    control: (base, state) => ({
      ...base,
      '&:hover': { borderColor: colors.primary },
      border: '1px solid lightgray',
      boxShadow: 'none',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected || state.isFocused ? colors.primary : colors.white,
      borderRadius: '5px',
      color: state.isSelected || state.isFocused ? colors.white : colors.darkGray,
    }),

    multiValue: provided => ({
      ...provided,
      borderRadius: 100,
      backgroundColor: colors.primary,
      color: colors.white,
    }),

    multiValueLabel: provided => ({
      ...provided,
      color: colors.white,
      fontSize: 13,
    }),

    multiValueRemove: (provided, state) => ({
      ...provided,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      backgroundColor: state.isFocused || state.isSelected ? colors.primary : colors.primary,
    }),

    indicatorsContainer: provided => ({
      ...provided,
      display: noIndicator ? 'none' : 'flex',
    }),

    singleValue: provided => ({
      ...provided,
      color: colors.black,
      fontSize: sort || per ? 16 : 13,
      fontWeight: sort || per ? 600 : 'normal',
      lineHeight: sort || per ? 26 : 23,
    }),
  };

  function parseSelectValue(selectValue) {
    if (!multiple) {
      return selectValue ? selectValue.value : '';
    }

    return selectValue ? selectValue.map(option => option.value) : [];
  }

  useEffect(() => {
    if (defaultValue !== null) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: async ? 'select.state.value' : 'state.value',
        parseValue: parseSelectValue,
        clearValue: selectRef => {
          selectRef.select.clearValue();
        },
      });
    }
  }, [defaultValue, fieldName, registerField, async, parseSelectValue]);

  return (
    <Container basket={basket} per={per}>
      {defaultValue === undefined && multiple ? (
        <Loading />
      ) : disabled ? (
        <Form.Input disabled name={name} placeholder={placeholder} />
      ) : (
        <StyledSelect
          name={fieldName}
          components={{ DropdownIndicator }}
          aria-label={fieldName}
          options={options}
          isMulti={multiple}
          defaultValue={defaultValue}
          ref={ref}
          placeholder={placeholder}
          styles={styles}
          as={async && Async}
          per={per}
          noBorder={noBorder}
          {...rest}
        />
      )}

      {error && <span>{error}</span>}
    </Container>
  );
}

Select.defaultProps = {
  basket: false,
  noBorder: false,
  noIndicator: false,
  per: false,
  sort: false,
};

export default Select;
