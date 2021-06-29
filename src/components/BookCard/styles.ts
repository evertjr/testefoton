import styled from 'styled-components';
import CardBg from '../../assets/cardBg.svg';

export const Container = styled.div`
  background: url(${CardBg}) #00173d no-repeat;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 272px;
  height: 139px;
  padding: 15px 20px;
  border-radius: 5px;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    max-width: 150px;
    padding: 5px 0;

    h1 {
      font-size: 16px;
      font-family: 'Playfair Display', serif;
    }

    h2 {
      font-size: 14px;
      font-weight: 400;
      margin-top: 5px;
    }

    span {
      display: flex;
      width: 80px;
      font-size: 12px;
      align-items: center;
      justify-content: space-between;

      img {
        width: 16px;
      }
    }
  }

  .picture {
    img {
      width: 72px;
    }
  }
`;
