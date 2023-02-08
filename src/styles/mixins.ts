import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const gradientGreen = css`
  background: linear-gradient(
    180deg,
    #56b6a4 0%,
    #208973 100%
  );
`;

export const gradientPink = css`
  background: linear-gradient(
    180deg,
    #ef6c9a 0%,
    #d8326a 100%
  );
  border-radius: 10px;
`;

export const fontTitle = css`
  font-family: 'IBM Plex Serif', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`;

export const paddingWrapper = css`
  padding: 2% 3%;
  @media (min-width: $laptop) {
    padding: 2% 12%;
  }
  @media (min-width: $desktop) {
    padding: 1% 15%;
  }
`;
