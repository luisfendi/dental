import styled, { css } from 'styled-components';
import vars from '../styles/variables.module.scss';

const Burger = ({ className, onClick }) => (
  <button
    className={className}
    onClick={onClick}
  >
    <span className='first'></span>
    <span className='second'></span>
    <span className='third'></span>
  </button>
);

export const StyledBurger = styled(Burger)`
  position: fixed;
  left: 0;
  top: 8%;
  z-index: 999;
  width: 8vw;
  aspect-ratio: 1/1;
  display: flex;
  background-color: transparent;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  cursor: pointer;
  @media (min-width: ${vars.laptop}) {
    width: 4vw;
  }
  @media (min-width: ${vars.desktop}) {
    display: none;
    width: 2vw;
  }
  & span {
    display: block;
    width: 60%;
    height: 9%;
    background: ${vars.black};
    margin-top: 9%;
    ${(props) => {
      switch (props.open) {
        case true:
          return css`
            & {
              margin: 0;
              position: absolute;
            }
            &.first {
              opacity: 0;
              transform: rotate(45deg);
            }
            &.second {
              transform: rotate(-45deg);
            }
            &.third {
              transform: rotate(45deg);
            }
          `;
        case false:
          return css`
            transform: rotate(0deg);
          `;
      }
    }}
  }

  &:hover {
    span {
      opacity: 0.7;
    }
  }
`;
