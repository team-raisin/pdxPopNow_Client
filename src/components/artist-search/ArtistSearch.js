import React, { PureComponent } from 'react';
import styles from './ArtistSearch.css';
import PropTypes from 'prop-types';

export default class ArtistSearch extends PureComponent {
  state = {
    search: ''
  }
  static propTypes = {
    // handleSearch: PropTypes.func.isRequired,
    artistSearch: PropTypes.func
  }

  handleChange = event => {
    const { artistSearch } = this.props;
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { search } = this.state;
      console.log('!!!!', search);
      artistSearch(search.toLowerCase());
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { artistSearch } = this.props;
    const { search } = this.state;
    artistSearch(search);
  }

  render() {
    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <select name='search' onChange={this.handleChange} value={this.state.search}>
          <option name='genre' value="Genre">Genre</option>
          <option name='genre' value="Acoustic">Acoustic</option>
          <option name='genre' value="Blues">Blues</option>
          <option name='genre' value="Country">Country</option>
          <option name='genre' value="Edm">EDM</option>
          <option name='genre' value="Electro">Electro</option>
          <option name='genre' value="Experimental">Experimental</option>
          <option name='genre' value="Folk">Folk</option>
          <option name='genre' value="Funk">Funk</option>
          <option name='genre' value="Garage">Garage</option>
          <option name='genre' value="Hip-Hop">Hip-hop</option>
          <option name='genre' value="Indie">Indie</option>
          <option name='genre' value="Jazz">Jazz</option>
          <option name='genre' value="Metal">Metal</option>
          <option name='genre' value="Pop">Pop</option>
          <option name='genre' value="Psych">Psych</option>
          <option name='genre' value="Punk">Punk</option>
          <option name='genre' value="r&amp;b">R&amp;B</option>
          <option name='genre' value="Rap">Rap</option>
          <option name='genre' value="Reggae">Reggae</option>
          <option name='genre' value="Regular">Regular</option>
          <option name='genre' value="Rock">Rock</option>
          <option name='genre' value="Soul">Soul</option>
          <option name='genre' value="Techno">Techno</option>
          <option name='genre' value="World">World</option>
        </select>
        <input className={styles.searchInput} onChange={this.handleChange} type="text" name="search" placeholder="Search artist, band, genre" />
        <button>Search</button>
      </form>
    );
  }
}
