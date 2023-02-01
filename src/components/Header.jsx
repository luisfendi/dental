import React from 'react';
import logo from '../img/Logo.png';
import Image from 'next/image';
import styled from 'styled-components';
import vars from '../styles/variables.module.scss';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 3% 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const LogoText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${vars.black};
  width: 50%;
  text-align: right;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    width: 1px;
    height: 80%;
    position: absolute;
    left: 50%;
    background: ${vars.lightGreen};
    display: block;
  }
`;

export const Header = () => (
  <Wrapper>
    <Logo>
      <Image
        src={logo}
        alt='logo'
        width='50%'
      />
      <LogoText>
        Представительство системы немецких имплантов WITAR в
        России
      </LogoText>
    </Logo>
  </Wrapper>
);
