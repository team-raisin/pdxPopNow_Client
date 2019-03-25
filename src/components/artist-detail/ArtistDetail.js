import React from 'react';
import styles from './ArtistDetail.css';

export default function ArtistDetail() {
  return (
      <>
        <img className={styles.background} src='src/assets/symphony.png'/>
        <button className={styles.backButton}>←</button>
        <h3 className={styles.name}>Nirvana</h3>
        <main className={styles.main}>
          <div className={styles.leftColumn}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/Nirvana_around_1992.jpg'/>
            <span className={styles.socialLinks}>
              <a href='https://www.facebook.com/Nirvana'>
                <img className={styles.socialIcon} src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flearningfromdocumenta.org%2Fwp-content%2Fuploads%2F2016%2F05%2Ffacebook_logo_300x300px_grayscale.png&f=1'/>
              </a>
              <a href='https://twitter.com/Nirvana'>
                <img className={styles.socialIcon} src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fgray%2Ftwitter-xxl.png&f=1'/>
              </a>
            </span> 
          </div>
          <div className={styles.rightColumn}>
            <span>
              <p className={styles.description}>Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. It was founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic. Nirvana went through a succession of drummers, the longest-lasting and best-known being Dave Grohl, who joined in 1990.</p>
            </span>
            <div className={styles.genreSongContainer}>
              <div className={styles.genresContainer}>
                <h4 className={styles.genreTitle}>Genre</h4>
                <ul>
                  <div className={styles.genres}>
                    <li>Alternative Rock</li>
                    <li>Grunge</li>
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
