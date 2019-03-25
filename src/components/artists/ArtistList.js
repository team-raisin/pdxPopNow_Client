import React from 'react';
import styles from './ArtistList.css';
import PropTypes from 'prop-types';

function ArtistList(props){
  const { artists } = props;
  const artistList = artists.map((artist, i) => { 
    return <li key={i}>
      <img src={artist.url}/>
      { artist.name }
    </li>;
  });
  return (
    <section className={styles.artistListSection}>
      <ul className={styles.artistList}>
        { artistList }
      </ul>
    </section>
  );
}


ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
};
export default ArtistList;
