import React, { Component } from 'react';
import { Container } from './styles';

import Header from '../../components/header';
import SideBar from '../../components/sideBar';
import ContainerIssues from '../../components/listIssues';

class Main extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <Header />
        <ContainerIssues />
      </Container>
    );
  }
}

export default Main;
