import React, { PureComponent } from 'react';
import styles from './ArtistSearch.css';
import PropTypes from 'prop-types';

export default class ArtistSearch extends PureComponent {
  state = {
    search: ''
  }
  static propTypes = {
    // handleSearch: PropTypes.func.isRequired,
    artistSearch: PropTypes.func
  }

  handleChange = event => {
    const { artistSearch } = this.props;
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { search } = this.state;
      artistSearch(search);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { artistSearch } = this.props;
    const { search } = this.state;
    artistSearch(search);
  }

  render() {
    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <select name='search' onChange={this.handleChange} value={this.state.search}>
          <option value="Acoustic">Acoustic</option>
          <option value="Blues">Blues</option>
          <option value="Country">Country</option>
        </select>
        <input className={styles.searchInput} onChange={this.handleChange} type="text" name="search" placeholder="Search artist, band, genre" />
        <button>Search</button>
      </form>
    );
  }
}
