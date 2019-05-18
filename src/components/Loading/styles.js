import styled, { css, keyframes } from 'styled-components';

import { FaSpinner } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;

  ${props =>
    props.type === 'button' &&
    css`
      margin-right: 5px;
    `}
`;
