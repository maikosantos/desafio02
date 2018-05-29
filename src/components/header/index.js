import React, { Component } from 'react';

import { Container } from './styles';

export default class Header extends Component {
  state = { value: 'Todas' };

  handleChange = async (event) => {
    event.preventDefault();

    this.setState({ value: event.target.value });
    // console.log(event.target.value);
  };

  render() {
    return (
      <Container>
        <div>Opa, beleza?</div>
        <div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Todas" selected>
              Todas
            </option>
            <option value="Abertas">Abertas</option>
            <option value="Fechadas">Fechadas</option>
          </select>
        </div>
      </Container>
    );
  }
}
