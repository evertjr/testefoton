import styled from 'styled-components';

export const Container = styled.div`
  background-color: #00173d;

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
      font-size: 18px;
    }

    h2 {
      font-size: 14px;
      font-weight: 400;
      margin-top: 5px;
    }

    span {
      font-size: 12px;
    }
  }
`;
