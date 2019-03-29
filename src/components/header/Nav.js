import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.css';

export default function Nav() {
  return (
    <>
      <nav className={style.headerNav}>
        <ul>
          <Link className={style.linkers} to='/'><li>Home</li></Link>
          <Link className={style.linkers}  to='/artistform'><li>Sign Up</li></Link>
        </ul>
      </nav>
    </>
  );
}
