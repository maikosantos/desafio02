import React, { Fragment } from 'react';

import { Container } from './styles';

const ListIssues = ({ repo }) => (
  <Container>
    <Fragment>
      {repo.map(repository => (
        <Fragment>
          <h1>{repository.login}</h1>
        </Fragment>
      ))}
    </Fragment>
  </Container>
);

export default ListIssues;
