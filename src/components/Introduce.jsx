import React from 'react';
import s from './Introduce.module.scss';
import Button from '@mui/material/Button';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  border-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.green};
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  display: flex;
  &:hover {
    border-color: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
  }
  &:focus {
    border-color: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.green};
  }
`;

export const Introduce = () => (
  <section className={`container ${s.introduce}`}>
    <h1 className={`${s['introduce-title']}`}>
      <span
        className={`${s['introduce-title__span']} ${s['introduce-title__span--row1']}`}
      >
        Циркониевые импланты
      </span>
      <br></br>
      <span
        className={`${s['introduce-title__span']} ${s['introduce-title__span--row2']}`}
      >
        с гарантией 25 лет{' '}
      </span>
      <br></br>
      <span
        className={`${s['introduce-title__span']} ${s['introduce-title__span--row3']}`}
      >
        по европейским стандартам ISO{' '}
      </span>
    </h1>
    <p className={`${s['introduce-text']}`}>
      Импланты из диоксида циркония надёжнее и безопаснее
      титановых в 4 раза
    </p>
    <div className={`${s.features}`}>
      <ul className={`${s['features__list']}`}>
        <li
          className={`${s['features__item']}  ${s['features__item--first']}`}
        >
          <span
            className={`${s['features__item-img']}`}
          ></span>
          <h5 className={`${s['features__item-title']}`}>
            Естественная белизна
          </h5>
        </li>
        <li
          className={`${s['features__item']}  ${s['features__item--second']}`}
        >
          <span
            className={`${s['features__item-img']}`}
          ></span>
          <h5 className={`${s['features__item-title']}`}>
            Более 15 лет успешного опыта работ
          </h5>
        </li>
        <li
          className={`${s['features__item']}  ${s['features__item--third']}`}
        >
          <span
            className={`${s['features__item-img']}`}
          ></span>
          <h5 className={`${s['features__item-title']}`}>
            Полностью биосовместимы
          </h5>
        </li>
      </ul>
    </div>
    <StyledButton
      variant='outlined'
      startIcon={<PhoneInTalkIcon />}
    >
      перезвоните мне
    </StyledButton>
  </section>
);
