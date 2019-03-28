import React from 'react';
import styles from './ArtistList.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ArtistList(props){
  const { artists } = props;
  const artistList = artists.map((artist, i) => { 
    return <Link className={styles.link} to={`/artist/${artist._id}`} key={i}><li><img src={artist.img}/>{ artist.artistName }</li></Link>;
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
