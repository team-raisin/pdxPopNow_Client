import React from 'react';
import Nav from './Nav';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>PDX POP <br/>NOW</h2>
      <Nav />
      <div className={styles.slide}></div>
      <div className={styles.slide}></div>
      <div className={styles.slide}></div>
      <div className={styles.slide}></div>
    </header>
  );
}
