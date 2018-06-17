import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Repository = styled.div`
  width: 280px;
  height: 80px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
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

export const DivIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-end;
  flex: 1 0;
`;
