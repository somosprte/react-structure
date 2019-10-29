import styled, { keyframes } from 'styled-components';
import { colors } from '~/assets/styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`;

export const Container = styled.div`
  animation: ${fadeIn} 1.5s linear;
  align-items: center;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
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

export const Logo = styled.img`
  align-self: flex-start;
  height: 100px;
  margin-bottom: 20px;
`;
