import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.css';

export default function Nav() {
  return (
    <>
      <nav className={styles.headerNav}>
        <ul>
          <Link className={styles.linkers} to='/'><li>Home</li></Link>
          <Link className={styles.linkers}  to='/artistform'><li>Sign Up</li></Link>
        </ul>
      </nav>
    </>
  );
}
