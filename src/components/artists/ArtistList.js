import React, { PureComponent } from 'react';
import styles from './ArtistList.css';
import PropTypes from 'prop-types';

export default class ArtistList extends PureComponent {
  static propTypes = {
    artists: PropTypes.array.isRequired
  }
  render() {
    const { artists } = this.props;
    const artistList = artists.map((artist, i) => { 
      return <li key={i}>
        <img src={artist.url}/>
        { artist.name }
      </li>;
    });
    return (
      <section className={styles.artistListSection}>
        <div className={styles.search}>
          <input className={styles.searchInput} type="text" name="search" placeholder="Search artist, band, genre" />
          <button>Search</button>
        </div>
        <h1>Artist List</h1>
        <ul className={styles.artistList}>
          { artistList }
        </ul>
      </section>
    );
  }
}
