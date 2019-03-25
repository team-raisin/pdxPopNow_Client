import React, { PureComponent } from 'react';
import styles from './ArtistSearch.css';
import PropTypes from 'prop-types';

export default class ArtistSearch extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }
  render() {
    return (
      <>
        <div className={styles.search}>
          <input className={styles.searchInput} type="text" name="search" placeholder="Search artist, band, genre" />
          <button>Search</button>
        </div>
      </>
    );
  }
}
