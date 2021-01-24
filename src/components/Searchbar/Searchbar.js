import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  handleSublit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim() === '') {
      alert('Enter something');
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSublit} className={s.SearchForm}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>
          <input
            onChange={this.handleChange}
            className={s.input}
            type="text"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
