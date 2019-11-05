import styled from 'styled-components';
import { colors, device } from 'assets/styles';

export const Container = styled.div`
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  @media print {
    padding-top: 30px;

    @page {
      margin: 0;
    }
    body {
      margin: 1.6cm;
    }
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  background: ${colors.white};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  cursor: auto;
  display: flex;
  flex-direction: column;
  left: 50%;
  max-height: 95%;
  max-width: 90%;
  overflow: scroll;
  position: absolute;
  padding: 20px 30px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;

  @media ${device.desktop} {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
