import styled from 'styled-components';
import { colors } from '~/assets/styles';

import { Form as ComponentForm, Button as ComponentButton } from '~/components';

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

export const Form = styled(ComponentForm)`
  background: #000;
`;

export const Button = styled(ComponentButton)`
  width: 150px;
`;
