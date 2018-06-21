import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository, DivImagem, DivNames, DivIcon } from './styles';

const ListRepos = ({ repositories, handleActiveRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id} onClick={() => handleActiveRepository(repository)}>
        <DivImagem>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        </DivImagem>
        <DivNames>
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </DivNames>
        <DivIcon>
          <i className="fa fa-angle-right" />
        </DivIcon>
      </Repository>
    ))}
  </Container>
);

ListRepos.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  })).isRequired,
  handleActiveRepository: PropTypes.func.isRequired,
};

export default ListRepos;
