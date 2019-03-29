import React from 'react';
import Nav from './Nav';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>PDX POP <br/>NOW</h2>
      {/* <img className={styles.background} src="src/assets/abstract-music-rock-bw.jpg" /> */}
      <Nav />
    </header>
  );
}
