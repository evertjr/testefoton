import styled, { css } from 'styled-components';
import { shade } from 'polished';
import searchIcon from '../../assets/searchIcon.svg';

export const Search = styled.form`
  margin-top: 50px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding-left: 50px;
    border: 0;
    border-radius: 10px;
    color: #3a3a3a;
    height: 48px;

    background: url(${searchIcon}) #fff no-repeat scroll 16px 16px;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const Greeting = styled.h1`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 400;

  span {
    font-weight: 600;
    color: #ff6978;
  }
`;
