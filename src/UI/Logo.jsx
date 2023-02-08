import React from 'react';
import logo from '../img/Logo.svg';
import Image from 'next/image';
import styled from 'styled-components';
import * as mix from '../styles/mixins';
import vars from '../styles/variables.module.scss';

const Logo = styled.div`
  display: flex;
  ${mix.flexCenter}
  position: relative;
  padding-right: 0.6em;
  &:after {
    content: '';
    width: 2px;
    height: 70%;
    position: absolute;
    right: 0;
    top: 15%;
    background: ${vars.lightGreen};
    display: block;
  }
`;

const LogoImage = styled.div`
  width: 15%;
  img {
    width: 100%;
  }
`;

const Text = styled.p`
  ${({ theme }) => theme.text.simpleText};
  padding-left: 5%;
  font-weight: bold;
  @media (min-width: ${vars.desktop}) {
    font-size: 12px;
    line-height: 14px;
  }
  &.title {
    font-weight: bold;
    font-size: 12px;
    @media (min-width: ${vars.desktop}) {
      font-size: 15px;
      line-height: 18px;
    }
  }
`;

export const StyledLogo = () => (
  <Logo>
    <LogoImage>
      <Image
        src={logo}
        alt='logo'
        priority
      />
    </LogoImage>
    <div>
      <Text className='title'>DENTAL GROUP WITAR</Text>
      <Text> стоматологические импланты</Text>
    </div>
  </Logo>
);
