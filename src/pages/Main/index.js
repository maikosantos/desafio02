import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Div } from './styles';

import SideBar from '../../components/sideBar';
import ListIssues from '../../components/listIssues';

export default class Main extends Component {
  state = {
    loading: false,
    activeRepository: null,
    issues: [],
  };

  handleActiveRepository = (repository) => {
    this.setState({ activeRepository: repository });
    this.handleReturnIssues(repository);
  };

  handleReturnIssues = async (repository) => {
    this.setState({ loading: true });

    const e = document.getElementById('selectOption');
    const filtroSelecionado = e === null ? 'all' : e.options[e.selectedIndex].value;

    try {
      const { data: arrayIssues } = await api.get(`/repos/${repository.full_name}/issues?state=${filtroSelecionado}`);

      this.setState({ issues: [] });
      this.setState({
        issues: [...this.state.issues, arrayIssues],
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <SideBar handleActiveRepository={this.handleActiveRepository} />
        <Div>
          {!!this.state.activeRepository && (
            <ListIssues
              handleActiveRepository={this.handleActiveRepository}
              repository={this.state.activeRepository}
              issues={this.state.issues}
              loading={this.state.loading}
            />
          )}
        </Div>
      </Container>
    );
  }
}
