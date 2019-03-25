import React, { PureComponent } from 'react';
import styles from './ArtistSearch.css';
import PropTypes from 'prop-types';

export default class ArtistSearch extends PureComponent {
  state = {
    search: ''
  }
  static propTypes = {
    handleSearch: PropTypes.func.isRequired
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = () => {
    this.props.handleSearch(this.state.search);
  }
  render() {
    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <input className={styles.searchInput} onChange={this.handleChange} type="text" name="search" placeholder="Search artist, band, genre" />
        <button>Search</button>
      </form>
    );
  }
}
