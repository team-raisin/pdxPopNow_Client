import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>PDX POP <br/>NOW</h2>
      {/* <img className={styles.background} src="src/assets/abstract-music-rock-bw.jpg" /> */}
      <aside>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Sign in</li>
            <li>create Artist</li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}
