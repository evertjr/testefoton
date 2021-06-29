import styled from 'styled-components';

export const Container = styled.div``;

export const Menu = styled.div`
  z-index: 5;
  display: flex;
  width: 378px;
  height: 59px;
  justify-content: space-between;
  padding: 0 60px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);

  a {
    align-self: center;
  }

  button {
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    align-self: center;

    img {
      align-self: center;
      width: 16px;
    }

    span {
      font-size: 8px;
      margin-top: 6px;
    }
  }
`;
