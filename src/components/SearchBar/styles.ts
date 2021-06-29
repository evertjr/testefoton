import styled from 'styled-components';
import searchIcon from '../../assets/searchIcon.svg';

export const Container = styled.div``;

export const Search = styled.form`
  margin-top: 50px;
  display: flex;

  input {
    margin: 0 auto;
    height: 70px;
    padding-left: 50px;
    border: 0;
    border-radius: 10px;
    color: #3a3a3a;
    width: 336px;
    height: 48px;

    background: url(${searchIcon}) #fff no-repeat scroll 16px 16px;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;
