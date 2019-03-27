import React from 'react';
import styles from './ArtistDetail.css';
import PropTypes from 'prop-types';

var SC = require('soundcloud');

SC.initialize({
  client_id: 'https://soundcloud.com/brysonthealien',
  redirect_uri: 'http://localhost:7890/artist/5c9bd93ff51a6750a290aef8'
});

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
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/183246622&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
