import styled from 'styled-components';
import { colors } from '~/assets/styles';

export const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Repository = styled.div`
  align-items: flex-start;
  border: solid 1px ${colors.lightGray};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  height: 90px;
  margin-bottom: 12px;
  padding: 12px 29px;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }
`;

export const RepositoryTitle = styled.span`
  color: ${colors.black};
  font-size: 18px;
  font-weight: bold;
`;

export const Avatar = styled.img`
  border-radius: 30px;
  height: 60px;
  width: 60px;
`;

export const Description = styled.span`
  color: ${colors.darkGray};
  font-size: 14px;
  flex-wrap: wrap;
`;
