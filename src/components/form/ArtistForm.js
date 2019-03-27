import React, { PureComponent } from 'react';
import styles from './Form.css';
import PropTypes from 'prop-types';

class ArtistForm extends PureComponent {
  static propTypes = {
    createArtist: PropTypes.func
  }

  state = {
    email: '',
    artistName: '',
    img: '',
    twitter: '',
    website: '',
    facebook: '',
    bandCamp: '',
    genre: '',
    description: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    const { 
      email, 
      artistName, 
      img, 
      twitter,
      website,
      facebook,
      bandCamp,
      genre,
      description } = this.state;

    const { createArtist } = this.props;

    createArtist(email, 
      artistName, 
      img, 
      twitter,
      website,
      facebook,
      bandCamp,
      genre,
      description);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {

    return (
      <>
      <h2>Create Artist Profile</h2>
      <section>
        <form className={styles.createForm} onSubmit={this.handleSubmit}>
          <input type='text' name='artistName'  placeholder='Artist Name/Band Name' onChange={this.handleChange} />
  
          <input type='text' name='email' onChange={this.handleChange} placeholder='Email' />
  
          <input type='text' name='img' onChange={this.handleChange} placeholder='Profile Pic' />

          <input type='text' name='twitter' onChange={this.handleChange} placeholder='Twitter' />

          <input type='text' name='website' onChange={this.handleChange} placeholder='Website' />

          <input type='text' name='facebook' onChange={this.handleChange} placeholder='Facebook' />

          <input type='text' name='bandCamp' onChange={this.handleChange} placeholder='Band Camp' /> 

          <select name='genre' onChange={this.handleChange}>
            <option name='genre' value="indie">Indie</option>
            <option name='genre' value="rock">Rock</option>
            <option name='genre' value="hip-hop/rap">Hip-hop/Rap</option>
            <option name='genre' value="country">Country</option>
          </select>

          <textarea name="description" placeholder="Describe yourself/band..." onChange={this.handleChange}></textarea>
          <button>Submit</button> 
        </form>
      </section>
      </>
    );
  }
}

export default ArtistForm;


