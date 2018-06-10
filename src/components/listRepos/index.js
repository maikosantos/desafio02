import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ContainerIssues from '../../components/listIssues';

import { Container, Repository, DivImagem, DivNames, DivIcon } from './styles';

const handleClick = async (e, repo) => {
  e.preventDefault();
  console.log(`${repo.owner.login}/${repo.name}`);
  ReactDOM.render(<ContainerIssues repo={repo} />, document.getElementById('containerIssues'));
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
  })).isRequired,
};

export default ListRepos;
