import styled, { css } from 'styled-components';
import { colors } from '~/assets/styles';

import { Link as LinkComponent } from 'react-router-dom';

export const Nav = styled.ul`
  align-items: flex-end;
  display: flex;
  height: 50px;
  list-style: none;
  margin: 0;
  margin-top: 80px;
  padding: 0;
  position: absolute;
`;

export const Title = styled.li`
  margin-right: 35px;

  > span {
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
  }

  > a {
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
  }

  ul {
    background: ${colors.white};
    display: none;
    list-style-type: none;
    padding: 5px 0;
    position: absolute;
    width: 175px;
    z-index: 999;
  }

  &:hover {
    > span {
      border-bottom-color: ${colors.primary};
      color: ${colors.primary};
    }

    > a {
      border-bottom-color: ${colors.primary};
      color: ${colors.primary};
    }

    ul {
      display: block;
    }
  }

  ${props =>
    props.active &&
    css`
      > a {
        border-bottom-color: ${colors.primary};
        color: ${colors.primary};
      }
    `}
`;

export const Item = styled.li`
  padding: 5px 10px;
`;

export const Link = styled(LinkComponent)`
  color: ${props => (props.active ? colors.primary : colors.black)};
  font-size: 13px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${colors.primary};
  }
`;
