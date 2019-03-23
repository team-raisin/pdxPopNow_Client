import React from 'react';
import styles from '../../css/ArtistList.css';

function ArtistList() {
  return (
    <>
      <div className={styles.search}>
        <input type="text" name="search" placeholder="artist, band, genre" />
        <button>Search</button>
      </div>
      <h1>Artist List</h1>
      <ul className={styles.artistList}>
        <li>
          <img src="https://via.placeholder.com/150" />
          Artist1
        </li>
        <li>
          <img src="https://via.placeholder.com/150" />
          Artist2
        </li>
        <li>
          <img src="https://via.placeholder.com/150" />
          Artist3
        </li>
        <li>
          <img src="https://via.placeholder.com/150" />
          Artist4
        </li>
        <li>
          <img src="https://via.placeholder.com/150" />
          Artist5
        </li>
        <li>
          <img src="https://via.placeholder.com/150" />
          Artist6
        </li>
      </ul>
    </>
  );
}

export default ArtistList;
