import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Form } from './styles';

export default class SideBar extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
      // repository.lastCommit = monent(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
      // console.log(response);
    } catch (err) {
      this.setState({ repositoryError: true });
      // console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Novo repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : '+'}
          </button>
        </Form>
        <hr />
      </Container>
    );
  }
}
