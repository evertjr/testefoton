import styled from 'styled-components';

export const Container = styled.div`
  background: #fffcf9;
  width: 378px;
  height: auto;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .loadBtn {
    margin-bottom: 100px;
    text-align: center;
    padding: 6px 12px;
    border-radius: 16px;
    background: none;
    border: 1px solid #ff6978;
    color: #ff6978;
    font-size: 14px;
  }

  .loadMsg {
    font-size: 12px;
    color: #ff6978;
  }
`;

export const Results = styled.div`
  margin: 0 auto;
  padding-bottom: 80px;

  div {
    margin-top: 20px;
    display: inline-block;
    flex-direction: column;
    padding: 10px;
    align-self: center;
    vertical-align: top;

    img {
      width: 90px;
    }

    h2 {
      margin-top: 5px;
      font-size: 12px;
      max-width: 90px;
      color: #313131;
    }

    h3 {
      margin-top: 5px;
      font-size: 10px;
      max-width: 90px;
      color: #313131;
    }
  }
`;
