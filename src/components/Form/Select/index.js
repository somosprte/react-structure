import React, { useRef, useEffect } from 'react';
import Async from 'react-select/async';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { Form } from 'components';
import { DropdownIndicator } from './components';
import { colors } from 'assets/styles';

import { Container, StyledSelect } from './styles';

function Select(props) {
  const { name, multiple, async, disabled, placeholder, noIndicator, ...rest } = props;
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
      fontSize: 13,
      fontWeight: 'normal',
      lineHeight: 23,
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
    <Container>
      {disabled ? (
        <Form.Input disabled name={name} placeholder={placeholder} />
      ) : (
        <StyledSelect
          name={fieldName}
          components={{ DropdownIndicator }}
          aria-label={fieldName}
          isMulti={multiple}
          defaultValue={defaultValue}
          ref={ref}
          styles={styles}
          as={async && Async}
          placeholder={placeholder}
          {...rest}
        />
      )}

      {error && <span>{error}</span>}
    </Container>
  );
}

Select.defaultProps = {
  disabled: false,
  multiple: false,
  async: false,
  noBorder: false,
  noIndicator: false,
  name: '',
  placeholder: '',
  options: [],
};

Select.propTypes = {
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  async: PropTypes.bool,
  noBorder: PropTypes.bool,
  noIndicator: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf([
    PropTypes.shape({
      value: PropTypes.object,
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default Select;
