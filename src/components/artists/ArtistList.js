import React from 'react';
import styles from './ArtistList.css';
import { getImageUrl } from '../../services/cloudinary';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function ArtistList(props){
  const { artists } = props;
  const artistList = artists.map((artist, i) => { 
    return <Link className={styles.link} to={`/${artist._id}`} key={i}><li>
      <img alt={`profile image for ${artist.name}`} src={getImageUrl(artist.img, ['w_700'])} />
      { artist.artistName }
    </li>
    </Link>;
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
