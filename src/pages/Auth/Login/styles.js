import styled from 'styled-components';
import { colors } from 'assets/styles';

export const Container = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.lighGray};
  border-radius: 20px;
  padding: 10px;
  width: 350px;
`;

export const Title = styled.h2`
  color: ${colors.pink};
`;
