import React from 'react';
import styles from './AboutUs.css';
import { Link } from 'react-router-dom';
import Nav from '../header/Nav';

export default function About() {
  return (
    <section className={styles.about}>
      <Nav />
      <h1>About Us</h1>
     
      <div className={styles.rockstar}>
        <img src="src/assets/rock-devs.jpg" alt="rock-devs-image"/>
      </div>
      
      <div className={styles.blurb}>
        <p>Our team is passionate about creating a way for music fans in Portland to discover their new favorite artists. We feel proud to create an artist directory for such an amazing non-profit like PDX Pop Now! Our hope is to create an easy way for local artists to be discovered to help increase their fan base and to create an avenue of new opportunities for them.</p>
        <p>Outside of coding, Tyler and Johnny enjoy shooting hoops, Michael volunteers for the amazing PDX Pop Now! Sophie is listening to true-crime podcasts, and Ivan enjoys spending time with his family and traveling.</p>
      </div>

      <h3 className={styles.githubHeader}>If you would like to see more of our work, please checkout:</h3>
      
      <div>
        <ul className={styles.github}>
          <Link className={styles.list} to='https://github.com/tylercorbett'><li>Tyler Corbett</li></Link>
          <Link className={styles.list} to='https://github.com/cruzayye'><li>Johnny Cruz</li></Link>
          <Link className={styles.list} to='https://github.com/pickuppatterns'><li>Michael Elliott</li></Link>
          <Link className={styles.list} to='https://github.com/sophiegraham'><li>Sophie Graham</li></Link>
          <Link className={styles.list} to='https://github.com/ipoblete'><li>Ivan Poblete</li></Link>
        </ul>
      </div>  
    </section>  
  );
}
