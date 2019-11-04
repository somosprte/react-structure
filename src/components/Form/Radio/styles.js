import styled from 'styled-components';
import { colors } from 'assets/styles';
import { Input } from '@rocketseat/unform';

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 22px;
  justify-content: center;
  position: relative;
  user-select: none;
`;

export const StyledInput = styled(Input)`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  height: 0;
  width: 0;

  &:checked {
    + div {
      background: ${colors.primary};
      border-color: ${colors.primary};
    }
  }
`;

export const Span = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  background: ${colors.white};
  border: 1px solid ${colors.darkGray};
  border-radius: 25px;
  height: 17px;
  justify-content: center;
  width: 17px;
`;
