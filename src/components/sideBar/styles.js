import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 390px;
  flex-direction: column;
  align-items: flex-initial;
  padding: 30px;
  background: #fff;

  /*border: 1px solid;*/

  hr {
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  margin-top: 5px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    height: 40px;
    width: 60px;
    padding: 0 10px;
    background: #eee;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    widht: 50px;
    height: 40px;
    padding: 0 10px;
    margin-left: 10px;
    background: #59ea9a;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;
