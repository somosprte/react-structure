import styled from 'styled-components';
import { colors } from 'assets/styles';

export const Container = styled.div`
  align-items: flex-start;
  border: solid 1px ${colors.lightGray};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  height: 90px;
  margin-bottom: 12px;
  padding: 12px 29px;
  width: 100%;

  .loading-placeholder {
    position: relative;
    overflow: hidden;

    &::after {
      animation: 1.5s loading-placeholder ease-in-out infinite;
      background: ${colors.border};
      bottom: 0;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transform: translateX(0);
      top: 0;
      width: 100%;
    }
  }

  @keyframes loading-placeholder {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }
`;

export const RepositoryTitle = styled.div`
  background: ${colors.lightGray};
  height: 15px;
  margin-bottom: 5px;
  width: 120px;
`;

export const Avatar = styled.div`
  background: ${colors.lightGray};
  border-radius: 30px;
  height: 60px;
  width: 60px;
`;

export const Description = styled.span`
  background: ${colors.lightGray};
  height: 10px;
  margin-bottom: 5px;
  width: 400px;
`;
