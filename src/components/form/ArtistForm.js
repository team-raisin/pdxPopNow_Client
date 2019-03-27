import React, { PureComponent } from 'react';
import styles from './Form.css';
import PropTypes from 'prop-types';

class ArtistForm extends PureComponent {
  static propTypes = {
    createArtist: PropTypes.func
  }

  state = {
    artistName: '', 
    contact:'',
    email:'', 
    img:'', 
    website:'',
    facebook:'',
    twitter:'',
    instagram:'',
    bandcamp:'',
    soundcloud:'',
    youtube:'',
    vimeo:'',
    genre:'',
    description: '' 
  }

  handleSubmit = e => {
    e.preventDefault();

    const { 
      artistName, 
      contact,
      email, 
      img, 
      website,
      facebook,
      twitter,
      instagram,
      bandcamp,
      soundcloud,
      youtube,
      vimeo,
      genre,
      description  
    } = this.state;

    const { createArtist } = this.props;

    createArtist( 
      artistName, 
      contact,
      email, 
      img, 
      website,
      facebook,
      twitter,
      instagram,
      bandcamp,
      soundcloud,
      youtube,
      vimeo,
      genre,
      description
    );
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
          <input type='text' name='artistName' onChange={this.handleChange} placeholder='Artist Name/Band Name' />
          <input type='text' name='contact' onChange={this.handleChange} placeholder='Contact'  />
          <input type='text' name='email' onChange={this.handleChange} placeholder='Email' />
          <input type='text' name='img' onChange={this.handleChange} placeholder='Photo URL' />
          <input type='text' name='website' onChange={this.handleChange} placeholder='Website URL' />
          <input type='text' name='facebook' onChange={this.handleChange} placeholder='Facebook URL' />
          <input type='text' name='twitter' onChange={this.handleChange} placeholder='Twitter URL' />
          <input type='text' name='instagram' onChange={this.handleChange} placeholder='Instagram URL' />
          <input type='text' name='bandcamp' onChange={this.handleChange} placeholder='Bandcamp URL' />
          <input type='text' name='soundcloud' onChange={this.handleChange} placeholder='Soundcloud URL' />  
          <input type='text' name='youtube' onChange={this.handleChange} placeholder='Youtube URL' />  
          <input type='text' name='vimeo' onChange={this.handleChange} placeholder='Vimeo URL' />  

          <select name='genre' onChange={this.handleChange}>
            <option name='genre' value="Acoustic">Acoustic</option>
            <option name='genre' value="Blues">Blues</option>
            <option name='genre' value="Country">Country</option>
            <option name='genre' value="Edm">EDM</option>
            <option name='genre' value="Electro">Electro</option>
            <option name='genre' value="Experimental">Experimental</option>
            <option name='genre' value="Folk">Folk</option>
            <option name='genre' value="Funk">Funk</option>
            <option name='genre' value="Garage">Garage</option>
            <option name='genre' value="Indie">Indie</option>
            <option name='genre' value="Jazz">Jazz</option>
            <option name='genre' value="Metal">Metal</option>
            <option name='genre' value="Pop">Pop</option>
            <option name='genre' value="Psych">Psych</option>
            <option name='genre' value="Punk">Punk</option>
            <option name='genre' value="R&amp;b">R&amp;B</option>
            <option name='genre' value="Rap">Rap</option>
            <option name='genre' value="Reggae">Reggae</option>
            <option name='genre' value="Regular">Regular</option>
            <option name='genre' value="Rock">Rock</option>
            <option name='genre' value="Hip-Hop/rap">Hip-hop/Rap</option>
            <option name='genre' value="Country">Country</option>
            <option name='genre' value="Soul">Soul</option>
            <option name='genre' value="Techno">Techno</option>
            <option name='genre' value="World">World</option>
          </select>

          <textarea name="description" placeholder="Please include a short bio" onChange={this.handleChange}></textarea>
          <button>Submit</button> 
        </form>
      </section>
      </>
    );
  }
}

export default ArtistForm;


