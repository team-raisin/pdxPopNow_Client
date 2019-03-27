import React from 'react';
import styles from './ArtistList.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ArtistList(props){
  const { artists, handleClick } = props;
  const artistList = artists.map((artist, i) => { 
    return <Link to={`/artist/${artist._id}`} key={i}><li onClick={handleClick}><img src={artist.img}/>{ artist.artistName }</li></Link>;
  });
  console.log(artists[0]);
  return (
    <section className={styles.artistListSection}>
      <ul className={styles.artistList}>
        { artistList }
      </ul>
    </section>
  );
}


ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};
export default ArtistList;
