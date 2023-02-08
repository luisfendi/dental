import calendar from '../img/calendar.png';
import logoMob from '../img/LogoMob.png';
import vars from '../styles/variables.module.scss';
import { css } from 'styled-components';

const simpleText = css`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  font-family: 'Roboto';
  color: ${vars.black};
  @media (min-width: ${vars.laptop}) {
    font-size: 12px;
    line-height: 16px;
  }
  @media (min-width: ${vars.desktop}) {
  }
`;

const titleText = css`
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #313e3c;
`;

const gradientPink = css`
  background: linear-gradient(
    180deg,
    #ef6c9a 0%,
    #d8326a 100%
  );
`;

const gradientGreen = css`
  background: linear-gradient(
    180deg,
    #56b6a4 0%,
    #208973 100%
  );
`;

export const theme = {
  green: '#239680',
  lightGreen: '#84CBBE',
  gradientPink,
  gradientGreen,
  calendarIcon: calendar,
  logo: {
    mob: logoMob,
  },
  text: {
    titleText,
    simpleText,
  },
};
