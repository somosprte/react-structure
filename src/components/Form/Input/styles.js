import styled from 'styled-components';
import { colors } from 'assets/styles';
import { Input } from '@rocketseat/unform';

export const StyledInput = styled(Input)`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  height: 44px;
  font-size: 13px;
  line-height: 23px;
  padding: 0 20px;

  &:focus {
    border-color: ${colors.borderFocused};
    box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
  }
`;
