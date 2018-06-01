import React, { Component } from 'react';
import { Container, Div } from './styles';

import Header from '../../components/header';
import SideBar from '../../components/sideBar';

class Main extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <Div>
          <Header />
          <div id="containerIssues" />
        </Div>
      </Container>
    );
  }
}

export default Main;
