import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #f5f5f5;

  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.div`
  width: 100%;
  height: 100px;
  padding: 40px 20px;
  background: #e0e0e0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;

  div {
    display: flex;
  }

  select {
    width: 200px;
    height: 42px;
    background-color: #fff;
    border: 1px solid bold;
    font-weight: bold;
  }
`;

export const DivImagem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const DivNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  padding-left: 2px;

  strong {
    font-size: 16px;
  }

  small {
    font-size: 14px;
    color: #666;
  }
`;

export const SectionIssues = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  background: #f5f5f5;
  margin: 20px;

  div {
    height: 100px;
    padding: 20px;
    border-radius: 3px;
    background: #fff;
  }
`;

/*
export const SectionIssues = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  background: #f5f5f5;

  div {
    display: flex
    width: 280px;
    height: 100px;
    padding: 20px;
    margin: 20px;
    border-radius: 3px;
    background: #fff;
  }
`; */
