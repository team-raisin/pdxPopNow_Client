import React from 'react';
import styles from './ArtistDetail.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
          <iframe width="50%" height="600" scrolling="no" frameBorder="no" allow="autoplay" src={link}></iframe>
        </div>
        <div className={styles.contactSection}>
          <h2 className={styles.contactMe}>Contact Me</h2>
          <table className={styles.table}>
            <tr className={styles.tableHeaders}>
              <th>Facebook</th>
              <th>Twitter</th>
              <th>Instagram</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>{artist.facebook}</td>
              <td>{artist.twitter}</td>
              <td>{artist.instagram}</td>
              <td>{artist.email}</td>
            </tr>
          </table>
        </div>
      </>
  );
}

ArtistDetail.propTypes = {
  artist: PropTypes.object.isRequired
};
