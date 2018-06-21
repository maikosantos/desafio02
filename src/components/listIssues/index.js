import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  SectionHeader,
  SectionIssues,
  DivImagem,
  DivNames,
  DivImagemIssue,
  DivLabelsIssues,
} from './styles';

const ListIssues = props => (
  <Container>
    <SectionHeader>
      <div>
        <DivImagem>
          <img src={props.repository.owner.avatar_url} alt={props.repository.owner.login} />
        </DivImagem>
        <DivNames>
          <strong>{props.repository.name}</strong>
          <small>{props.repository.owner.login}</small>
        </DivNames>
      </div>
      <select id="selectOption" onChange={() => props.handleActiveRepository(props.repository)}>
        <option value="all">Todas</option>
        <option value="open">Abertas</option>
        <option value="closed">Fechadas</option>
      </select>
    </SectionHeader>
    {props.loading ? (
      <h1>
        <i className="fa fa-spinner fa-pulse" /> Aguarde...Consultando informações!
      </h1>
    ) : (
      <SectionIssues>
        {props.issues.map(list =>
          list.map(issue => (
            <div key={issue.id}>
              <DivImagemIssue>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
              </DivImagemIssue>
              <DivLabelsIssues>
                <strong>{`${issue.title.substr(1, 20)}...`} </strong>
                <small>{issue.user.login}</small>
                <a href={issue.html_url} target="_blank">
                  <i className="fa fa-external-link" />
                  ABRIR ISSUE
                </a>
              </DivLabelsIssues>
            </div>
          )))}
      </SectionIssues>
    )}
  </Container>
);

ListIssues.defaultProps = {
  // children: 'Salvar',
};

ListIssues.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleActiveRepository: PropTypes.func.isRequired,
  repository: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  })).isRequired,
};

export default ListIssues;
