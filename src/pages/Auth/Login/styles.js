import styled from 'styled-components';
import { colors } from 'assets/styles';

import { Form as ComponentForm, Button as ComponentButton } from 'components';

export const Container = styled.div`
  background: ${colors.white};
  box-shadow: 5px 10px 18px rgba(226, 226, 226, 0.7);
  border-radius: 20px;
  padding: 30px 40px;
  width: 400px;
`;

export const Logo = styled.img`
  align-self: flex-start;
  height: 100px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  font-size: 42px;
  font-weight: 800;
  line-height: 49px;
  margin-bottom: 27px;

  > span {
    color: ${colors.darkGray};
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    margin-top: 6px;
  }
`;

export const Form = styled(ComponentForm)`
  background: ${colors.white};
`;

export const Button = styled(ComponentButton)`
  margin-bottom: 16px;
  width: 100%;
`;
