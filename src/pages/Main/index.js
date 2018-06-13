import React, { Component } from 'react';
import { Container, Div } from './styles';

import Header from '../../components/header';
import SideBar from '../../components/sideBar';
import ListIssues from '../../components/listIssues';

class Main extends Component {
  state = {
    activeRepository: null,
  };

  handleActiveRepository = (repository) => {
    this.setState({ activeRepository: repository });
  };

  render() {
    return (
      <Container>
        <SideBar handleActiveRepository={this.handleActiveRepository} />
        <Div>
          <Header />
          {!!this.state.activeRepository && <ListIssues repository={this.state.activeRepository} />}
        </Div>
      </Container>
    );
  }
}

export default Main;
