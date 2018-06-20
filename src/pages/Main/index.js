import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Div } from './styles';

import SideBar from '../../components/sideBar';
import ListIssues from '../../components/listIssues';

class Main extends Component {
  state = {
    activeRepository: null,
    repositoryError: false,
    issues: [],
  };

  handleActiveRepository = (repository) => {
    this.setState({ activeRepository: repository });
    this.handleReturnIssues(repository);
  };

  handleReturnIssues = async (repository) => {
    // this.setState({ loading: true });

    try {
      const { data: arrayIssues } = await api.get(`/repos/${repository.full_name}/issues?state=open`);

      this.setState({ issues: [] });
      this.setState({
        issues: [...this.state.issues, arrayIssues],
        // repositoryError: false,
      });
      // console.log(response);
      // console.log(this.state.issues);
    } catch (err) {
      // this.setState({ repositoryError: true });
      // console.log(err);
    } finally {
      // this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <SideBar handleActiveRepository={this.handleActiveRepository} />
        <Div>
          {!!this.state.activeRepository && (
            <ListIssues repository={this.state.activeRepository} issues={this.state.issues} />
          )}
        </Div>
      </Container>
    );
  }
}

export default Main;
