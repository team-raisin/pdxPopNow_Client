import React from 'react';
import styles from './ArtistDetail.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSoundcloud,
  FaVimeo,
  FaBandcamp,
  FaDesktop
} from 'react-icons/fa';


export default function ArtistDetail({ artist }) {
  console.log(artist);
  const link = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${artist.soundcloudId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  return (
      <>
        <Link className={styles.backButton} to='/'>←</Link>
        <h3 className={styles.name}>{artist.artistName}</h3>
        <main className={styles.main}>
          <div className={styles.pictureContainer}>
            <img className={styles.picture} src={artist.img}/>
          </div>
          <div className={styles.rightColumn}>
            <p className={styles.description}>{artist.description}</p>
          </div>
        </main>
        <div className={styles.songSection}>
          <h2 className={styles.myMusic}>My Music</h2>
          {artist.soundcloudId && <iframe width="50%" height="600" scrolling="no" frameBorder="no" allow="autoplay" src={link}></iframe>}
        </div>
        <div className={styles.socialSection}>
          <div className={styles.socialMediaContainer}>
            {artist.facebook && <a href={artist.facebook}><FaFacebook className={styles.facebook}/></a>}
            {artist.instagram && <a href={artist.instagram}><FaInstagram className={styles.instagram}/></a>}
            {artist.twitter && <a href={artist.twitter}><FaTwitter className={styles.twitter}/></a>}
            {artist.youtube && <a href={artist.youtube}><FaYoutube className={styles.youtube}/></a>}
            {artist.soundcloud && <a href={artist.soundcloud}><FaSoundcloud className={styles.soundcloud}/></a>}
            {artist.vimeo && <a href={artist.vimeo}><FaVimeo className={styles.vimeo}/></a>}
            {artist.bandcamp && <a href={artist.bandcamp}><FaBandcamp className={styles.bandcamp}/></a>}
            {artist.website && <a href={artist.website}><FaDesktop className={styles.website}/></a>}
          </div>
        </div>
      </>
  );
}

ArtistDetail.propTypes = {
  artist: PropTypes.object.isRequired
};
