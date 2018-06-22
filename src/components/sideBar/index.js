import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Form } from './styles';

import ListRepos from '../../components/listRepos';

export default class SideBar extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    countRepos: 0,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
        countRepos: this.state.countRepos + 1,
      });

      if (this.state.countRepos > 1) {
        document.getElementById('selectOption').value = 'all';
      }
    } catch (err) {
      this.setState({ repositoryError: true });
      console.log(err);
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
        <ListRepos
          handleActiveRepository={this.props.handleActiveRepository}
          repositories={this.state.repositories}
        />
      </Container>
    );
  }
}
