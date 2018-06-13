import React from 'react';

import { Container } from './styles';

const ListIssues = ({ repository }) => (
  <Container>
    <h1>{repository.full_name}</h1>
  </Container>
);

export default ListIssues;
