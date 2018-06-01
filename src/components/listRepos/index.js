import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ContainerIssues from '../../components/listIssues';

import { Container, Repository, DivImagem, DivNames, DivIcon } from './styles';
import { Div } from '../../pages/Main/styles';

const handleClick = async (e, repository) => {
  e.preventDefault();

  ReactDOM.render(
    <ContainerIssues />,
    {
      type: Div,
      props: { repository },
    },
    document.getElementById('containerIssues'),
  );

  // https://medium.com/@oieduardorabelo/componentes-elementos-e-inst%C3%A2ncias-em-react-2833f613b063

  // ReactDOM.render(<ContainerIssues />, document.getElementById('containerIssues'));
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
