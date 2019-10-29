import styled from 'styled-components';
import { colors } from '~/assets/styles';

export const Container = styled.div`
  align-items: center;
  background: ${colors.white};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
