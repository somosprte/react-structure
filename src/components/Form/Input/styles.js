import styled from 'styled-components';
import { colors } from '~/assets/styles';
import { Input } from '@rocketseat/unform';

export const StyledInput = styled(Input)`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  height: 44px;
  font-size: 13px;
  line-height: 23px;
  padding: 0 20px;
  width: 100%;

  &:focus {
    border-color: ${colors.borderFocused};
    box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
  }

  & + span {
    color: ${colors.error};
    font-size: 11px;
    font-weight: 300;
    margin-top: 3px;
  }
`;
