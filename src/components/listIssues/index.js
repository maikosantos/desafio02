import React from 'react';
import Test from '../../components/teste';

import { Container, SectionHeader, SectionIssues, DivImagem, DivNames } from './styles';

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
      {console.log(props.issues)}
      {props.issues.map(issue => (
        <div key={issue.id}>
          <h1>{issue.number}</h1>
        </div>
      ))}
    </SectionIssues>
  </Container>
);
export default ListIssues;
