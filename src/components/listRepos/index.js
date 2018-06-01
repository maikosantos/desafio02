import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository, DivImagem, DivNames, DivIcon } from './styles';

const handleClick = async (e, repository) => {
  e.preventDefault();
  alert(repository.name);
};

const ListRepos = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id} onClick={e => handleClick(e, repository)}>
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
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    pushed_at: PropTypes.string,
  })).isRequired,
};

export default ListRepos;
