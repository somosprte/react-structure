import styled from 'styled-components';
import { colors } from 'assets/styles';

export default styled.button`
  align-items: center;
  background: ${props => (props.role ? colors[props.role] : colors.primary)};
  border: 0;
  border-radius: 25px;
  box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
  color: ${colors.white};
  display: flex;
  font-size: 12px;
  font-weight: 600;
  height: 44px;
  line-height: 19px;
  padding: 0 2px;
  justify-content: center;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.6;
  }
`;
