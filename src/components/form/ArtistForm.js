import React from 'react';
import styles from './Form.css';
import PropTypes from 'prop-types';

function ArtistForm({ artistName, email, handleSubmit, emailChange }){
  return (
    <>
    <h2>Create Artist Profile</h2>
    <section>
      <form className={styles.createForm} onSubmit={handleSubmit.bind(null, artistName, email)}>
        <input type='text' name='artistName' value={artistName} onChange={emailChange} placeholder='Artist Name/Band Name' />

        <input type='text' name='email' value={email} onChange={emailChange} placeholder='Email' />

        {/* <input type='text' name='profilePic' onChange={this.handleChange} placeholder='Profile Pic' />
        <input type='text' name='twitter' onChange={this.handleChange} placeholder='Twitter' />
        <input type='text' name='website' onChange={this.handleChange} placeholder='Website' />
        <input type='text' name='facebook' onChange={this.handleChange} placeholder='Facebook' />
        <input type='text' name='bandCamp' onChange={this.handleChange} placeholder='Band Camp' /> */}
        {/* <select name='genre' onChange={this.handleChange}>
          <option value="indie">Indie</option>
          <option value="rock">Rock</option>
          <option value="hip-hop/rap">Hip-hop/Rap</option>
          <option value="country">Country</option>
        </select>   */}
        {/* <textarea name="description" placeholder="Describe yourself/band..." onChange={this.handleChange}></textarea> */}
      </form>
      <button>Submit</button> 
    </section>
    </>
  );
}

ArtistForm.propTypes = {
  artistName: PropTypes.string,
  email: PropTypes.string.isRequired,
  emailChange: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
  
};

export default ArtistForm;


