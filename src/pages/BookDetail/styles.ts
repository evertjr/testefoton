import styled from 'styled-components';
import background from '../../assets/detailBackground.svg';

export const Container = styled.div`
  background-color: #fff;
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

  a {
    width: 50px;
    position: fixed;
    top: 50px;
    text-decoration: none;
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
    padding-bottom: 80px;
  }
`;

export const ActionMenu = styled.div`
  div {
    width: 335px;
    height: 56px;
    background: #ffffff;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 2px;
    padding: 20px 22px;

    display: flex;
    justify-content: space-between;

    position: fixed;
    bottom: 53px;

    button {
      background: none;
      border: none;
    }

    .vl {
      width: 1px;
      padding: 0;
      border-left: 1px solid rgba(151, 151, 151, 0.2);
    }
  }
`;
