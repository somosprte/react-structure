import styled from 'styled-components';
import { colors } from '~/assets/styles';

export const Container = styled.div`
  background: ${colors.white};
  min-height: 100%;
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
