import styled from 'styled-components';
import { colors } from 'assets/styles';
import Masked from 'react-maskedinput';

export const StyledMaskedInput = styled(Masked)`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  height: 44px;
  font-size: 13px;
  line-height: 23px;
  margin-bottom: 16px;
  max-width: 100%;
  min-height: 44px;
  padding: 10px 21px;
  width: 100%;

  & + span {
    color: ${colors.error};
    font-size: 11px;
    font-weight: 300;
    margin-top: 3px;
  }

  &:focus {
    border-color: ${colors.borderFocused};
    box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
  }
`;
