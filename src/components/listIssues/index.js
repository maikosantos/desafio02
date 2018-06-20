import React, { Fragment } from 'react';
import Test from '../../components/teste';

import {
  Container,
  SectionHeader,
  SectionIssues,
  DivImagem,
  DivNames,
  DivImagemIssue,
  DivLabelsIssues,
} from './styles';

// class ListIssues extends Component {
/* const state = { value: 'Todas' };

const handleChange = async (event) => {
  event.preventDefault();

  this.setState({ value: event.target.value });
  // console.log(event.target.value);
}; */

// <select name="selectOption" value={this.state.value} onChange={handleChange}>

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
      <select name="selectOption">
        <option value="Todas" selected>
          Todas
        </option>
        <option value="Abertas">Abertas</option>
        <option value="Fechadas">Fechadas</option>
      </select>
    </SectionHeader>
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
  </Container>
);
export default ListIssues;
