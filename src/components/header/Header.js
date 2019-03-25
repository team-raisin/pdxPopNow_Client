import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.background} src="src/assets/abstract-music-rock-bw.jpg" />
    </header>
  );
}
