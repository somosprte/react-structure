import styled, { css } from 'styled-components';
import { colors, device } from 'assets/styles';
import { Input } from '@rocketseat/unform';

export const Container = styled.label`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const StyledInput = styled(Input)`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  box-shadow: none !important;
  color: ${props => (props.disabled ? colors.darkGray : colors.black)};
  height: ${props => (props.multiline ? '125px' : '44px')};
  font-size: 13px;
  line-height: 23px;
  max-width: 100%;
  min-height: 44px;
  padding: ${props => (props.multiline ? '10px 15px' : '10px 21px')};
  width: 100%;

  & + span {
    color: ${colors.error};
    font-size: 11px;
    font-weight: 300;
    margin-top: 3px;
  }

  &:focus {
    border-color: ${colors.borderFocused};
    box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07) !important;
  }
`;

export const Icon = styled.div`
  flex-direction: row !important;
  justify-content: flex-end !important;
  position: absolute;
  right: 18px;
  top: 16px;

  > svg {
    position: relative;
    bottom: 1px;
  }

  > img {
    bottom: 4px;
    height: 25px;
    left: 24px;
    position: relative;
    width: 25px;
  }

  ${props =>
    props.responsive &&
    css`
      left: -75px;
    `}

  ${props =>
    props.cvv &&
    css`
      @media ${device.mobileS} {
        img {
          display: none;
        }
      }
    `}
`;

export const Text = styled.span`
  color: ${colors.darkGray};
  font-size: 11px;
  line-height: 16px;
  position: absolute;
  right: 19px;
`;
