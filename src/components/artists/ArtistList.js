import React, { PureComponent } from 'react';
import styles from './ArtistList.css';
import PropTypes from 'prop-types';

export default class ArtistList extends PureComponent {
  static propTypes = {
    artists: PropTypes.array.isRequired
  }
  render() {
    const { artists } = this.props;
    const artistList = artists.map((artist, i) => { 
      return <li key={i}>
        <img src={artist.url}/>
        { artist.name }
      </li>;
    });
    return (
      <section className={styles.artistListSection}>
        <ul className={styles.artistList}>
          { artistList }
        </ul>
      </section>
    );
  }
}
