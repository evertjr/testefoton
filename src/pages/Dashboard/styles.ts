import styled from 'styled-components';
import CardBg2 from '../../assets/cardBg2.svg';

export const Container = styled.div`
  background: #fffcf9;
  width: 378px;
  height: 900px;
  padding: 20px;
  margin: 0 auto;

  form {
    margin-top: 30px;
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

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 15px 0;

  h2 {
    font-size: 18px;
    font-weight: 500;
  }

  button {
    border: none;
    background: none;
    color: #4abdf1;
    font-size: 14px;
  }
`;

export const Featured = styled.div`
  display: flex;
  align-items: center;

  img {
    z-index: 2;
    width: 88px;
  }

  div {
    display: flex;
    flex-direction: column;
    background: url(${CardBg2}) #ecf2d7 no-repeat 30px;
    height: 100px;
    width: 331px;
    position: absolute;
    margin-left: -20px;
    padding: 10px 10px 10px 120px;
    z-index: 1;

    span {
      margin-top: auto;
      font-size: 10px;

      strong {
        color: #ff6978;
      }
    }

    h1 {
      font-size: 20px;
      font-family: 'Playfair Display', serif;
    }

    h3 {
      font-size: 10px;
      font-weight: 500;
      color: #74776d;
    }
  }
`;

export const Reviews = styled.div`
  border-radius: 4px;
`;
