import React from 'react';
import styles from '../../css/ArtistList.css';

function ArtistList() {
  return (
    <>
      <div className={styles.search}>
        <input type="text" name="search" placeholder="Search artist, band, genre" />
        <button>Search</button>
      </div>

      <h1>Artist List</h1>
      <ul className={styles.artistList}>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist1
        </li>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist2
        </li>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist3
        </li>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist4
        </li>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist5
        </li>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist6
        </li>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist7
        </li>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist8
        </li>
        <li>
          <img src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          Artist9
        </li>
      </ul>
    </>
  );
}

export default ArtistList;
