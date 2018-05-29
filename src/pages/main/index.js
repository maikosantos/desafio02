import React, { Component } from 'react';
import { Container, Div } from './styles';

import Header from '../../components/header';
import SideBar from '../../components/sideBar';
import ContainerIssues from '../../components/listIssues';

class Main extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <Div>
          <Header />
          <ContainerIssues />
        </Div>
      </Container>
    );
  }
}

export default Main;
