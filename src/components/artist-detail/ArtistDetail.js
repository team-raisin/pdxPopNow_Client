import React from 'react';
import styles from './ArtistDetail.css';
import PropTypes from 'prop-types';

export default function ArtistDetail({ artist }) {
  console.log(artist);
  return (
      <>
        <button className={styles.backButton}>←</button>
        <h3 className={styles.name}>{artist.artistName}</h3>
        <main className={styles.main}>
          <div className={styles.leftColumn}>
            <img className={styles.picture} src={artist.img}/>
            <span className={styles.socialLinks}>
              <a href={artist.facebook}>
                <img className={styles.socialIcon} src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flearningfromdocumenta.org%2Fwp-content%2Fuploads%2F2016%2F05%2Ffacebook_logo_300x300px_grayscale.png&f=1'/>
              </a>
              <a href={artist.twitter}>
                <img className={styles.socialIcon} src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fgray%2Ftwitter-xxl.png&f=1'/>
              </a>
            </span> 
          </div>
          <div className={styles.rightColumn}>
            <span>
              <p className={styles.description}>{artist.description}</p>
            </span>
            <div className={styles.genreSongContainer}>
              <div className={styles.genresContainer}>
                <h4 className={styles.genreTitle}>Genre</h4>
                <ul>
                  <div className={styles.genres}>
                    <li>{artist.genre[0]}</li>
                  </div>
                </ul>
              </div>
              <div className={styles.songContainer}>
                <h4 className={styles.songTitle}>&#34;Smells Like Teen Spirit&#34;</h4>
                <audio controls>
                  <source src='src/assets/song.mp3' type='audio/mpeg'/>
                </audio>
              </div>
            </div>
          </div>
        </main>
      </>
  );
}

ArtistDetail.propTypes = {
  artist: PropTypes.object.isRequired
};
