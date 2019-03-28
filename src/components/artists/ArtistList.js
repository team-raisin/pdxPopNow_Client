import React from 'react';
import styles from './ArtistList.css';
import { getImageUrl } from '../../services/cloudinary';
import PropTypes from 'prop-types';


function ArtistList(props){
  const { artists } = props;
  const artistList = artists.map((artist, i) => { 
    return <li key={i}>
      <img alt={`profile image for ${artist.name}`} src={getImageUrl(artist.img, ['w_700'])} />

      {/* <img src={artist.img}/> */}
      { artist.artistName }
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
