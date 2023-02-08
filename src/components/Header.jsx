import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import vars from '../styles/variables.module.scss';
import schedule from '../img/calendar.png';
import tooth from '../img/tooth.png';
import * as mix from '../styles/mixins';
import { StyledBurger as Burger } from '../UI/Burger';
import { useSelector, useDispatch } from 'react-redux';
import { handleClick } from '../store/drawerSlice';
import { StyledLogo } from '../UI/Logo';

const StyledHeader = styled.header`
  ${mix.flexCenter};
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 80;
  border-bottom: 1px solid
    ${({ theme }) => theme.lightGreen};
`;

const Text = styled.p`
  ${(props) => props.theme.text.simpleText}
  text-align: left;
  &.description {
    width: 50%;
    padding-left: 0.6em;
    margin-right: auto;
    @media (min-width: ${vars.laptop}) {
      width: 20%;
    }
    @media (min-width: ${vars.desktop}) {
      width: 15%;
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

const Info = styled.div`
  ${mix.flexCenter}
  @media(min-width: ${vars.desktop}) {
    width: 50%;
    justify-content: space-around;
  }
`;

const InfoBlock = styled.div`
  display: none;

  & .schedule__time {
    padding-right: 12px;
    position: relative;
    &:after {
      content: '';
      width: 10px;
      aspect-ratio: 1/1;
      display: block;
      position: absolute;
      top: 2.5px;
      right: 0;
      ${({ theme }) => theme.gradientGreen};
      border-radius: 50%;
    }
  }
  @media (min-width: ${vars.laptop}) {
    &.schedule {
      ${mix.flexCenter};
    }
  }
  @media (min-width: ${vars.desktop}) {
    ${mix.flexCenter};
    &.phoneNumber {
      display: block;
      ${Text} {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #3f514e;
      }
    }
  }
`;

const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  @media (max-width: ${vars.desktop}) {
    display: none;
  }
  .text {
    ${({ theme }) => theme.text.titleText}
  }
  .burger {
    position: relative;
    @media (min-width: ${vars.desktop}) {
      display: flex;
    }
  }
`;

export const Header = () => {
  const burgerState = useSelector(
    (state) => state.drawer.top,
  );
  const dispatch = useDispatch();

  return (
    <StyledHeader className='container'>
      <StyledLogo></StyledLogo>

      <Text className='description'>
        Представительство системы немецких имплантов WITAR в
        России
      </Text>

      <Info>
        <InfoBlock className='schedule'>
          <Image
            src={schedule}
            alt='scheduleIcon'
          />
          <div>
            <Text className='schedule__time'>
              Пн-Вс: с 10:00 до 20:00
            </Text>
            <Text>Без выходных дней</Text>
          </div>
        </InfoBlock>
        <InfoBlock className='address'>
          <Image
            src={tooth}
            alt='scheduleIcon'
          />
          <div>
            <Text>
              г.Москва, <br></br> ул. Нижегородская, дом 7
            </Text>
          </div>
        </InfoBlock>
        <InfoBlock className='phoneNumber'>
          <Text className='phone'>
            <a
              type='tel'
              href='tel:+78142332211'
            >
              +7(985) 921-95-77
            </a>
          </Text>
          <Text className='phone'>
            <a
              type='tel'
              href='tel:+78142332211'
            >
              +7(985) 921-95-77
            </a>
          </Text>
        </InfoBlock>
      </Info>

      <HeaderButton
        onClick={() => dispatch(handleClick('top'))}
      >
        <span className='text'>Meню</span>
        <Burger
          className='burger'
          open={burgerState}
        />
      </HeaderButton>
    </StyledHeader>
  );
};
