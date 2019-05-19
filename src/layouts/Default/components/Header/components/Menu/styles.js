import styled, { css } from 'styled-components';
import { colors } from '~/assets/styles';

import { Link as LinkComponent } from 'react-router-dom';

export const Nav = styled.ul`
  align-items: flex-end;
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  margin-right: 35px;

  a {
    &:hover {
      border-bottom-color: ${colors.primary};
      color: ${colors.primary};
    }
  }

  ${props =>
    props.active &&
    css`
      a {
        border-bottom-color: ${colors.primary};
        color: ${colors.primary};
      }
    `}
`;

export const Link = styled(LinkComponent)`
  border-bottom: 3px solid ${colors.white};
  color: ${colors.black};
  display: block;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.02em;
  padding: 0 0 12px;
  transition: all 0.4s;
  text-decoration: none;
  text-transform: uppercase;
`;
