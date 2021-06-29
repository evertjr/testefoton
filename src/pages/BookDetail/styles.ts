import styled from 'styled-components';
import background from '../../assets/detailBackground.svg';

export const Container = styled.div`
  background-color: #f2f2f2;
  width: 378px;
  height: 812px;
  padding: 20px;
  margin: 0 auto;

  background: url(${background}) #fff no-repeat;
  background-clip: padding-box;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  margin-top: 60px;

  button {
    width: 50px;
    position: absolute;
    top: 50px;
    text-decoration: none;
    border: none;
    background: none;

    img {
      width: 14px;
    }
  }

  img {
    width: 151px;
    align-self: center;
    -webkit-box-shadow: -2px 24px 50px -19px rgba(0, 0, 0, 0.47);
    box-shadow: -2px 24px 50px -19px rgba(0, 0, 0, 0.47);
  }

  h1 {
    margin-top: 31px;
    font-size: 24px;
  }

  h2 {
    margin-top: 7px;
    font-size: 16px;
    color: #ff6978;
  }

  p {
    margin-top: 10px;
    color: #313131;
    line-height: 25px;
    padding-bottom: 30vh;
  }
`;

export const ActionMenu = styled.div`
  div {
    width: 335px;
    height: 56px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 2px;
    padding: 20px 22px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 53px;

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      font-size: 14px;
      font-weight: 600;
      color: #3f4043;

      img {
        width: 16px;
        margin-right: 8px;
      }
    }

    .vl {
      width: 1px;
      padding: 0;
      border-left: 1px solid rgba(151, 151, 151, 0.2);
    }
  }
`;
