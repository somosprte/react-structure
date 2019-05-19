import styled from 'styled-components';
import { colors } from '~/assets/styles';

export const Container = styled.div`
  align-items: center;
  background: ${colors.white};
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.07);
  height: 130px;
  justify-content: center;
  width: 100%;

  > div {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0 auto;
    max-width: 990px;
    width: 100%;
  }
`;

export const Logo = styled.img`
  margin-right: 90px;
`;

export const Navigation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
