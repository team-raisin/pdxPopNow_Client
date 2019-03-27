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
    this.setState({ [event.target.name]: event.target.value });
    const { artistSearch } = this.props;
    const { search } = this.state;
    // this.props.handleSearch(this.state.search);
    artistSearch(search);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { artistSearch } = this.props;
    const { search } = this.state;
    // this.props.handleSearch(this.state.search);
    artistSearch(search);
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
