import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  background: #e0e0e0;

  /*border: 1px solid;*/

  select {
    width: 200px;
    height: 42px;
    background-color: #fff;
    border: 1px solid bold;
    font-weight: bold;
  }
`;

export const DivSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 200px;
  height: 42px;
`;
