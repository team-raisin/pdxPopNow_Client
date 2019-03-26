import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import styles from './Form.css';
import PropTypes from 'prop-types';

class Form extends PureComponent{
  // state = {
  //   artistName: '',
  //   email: '',
  //   profilePic: '',
  //   twitter: '',
  //   website: '',
  //   facebook: '',
  //   bandCamp: '',
  //   genre: '',
  //   description: ''
  // }

  static propTypes = {
    handleChange: PropTypes.func
  }

  handleChange = ({ target }) => {
    target.preventDefault;
    this.setState({ [target.name]: target.value });
  }


  render() {
    return (
      <>
        <h2>Create Artist Profile</h2>
      <section>
        <form className={styles.createForm}>
          <input type='text' name='artistName' onChange={this.handleChange} placeholder='Artist Name/Band Name' />
          <input type='text' name='email' onChange={this.handleChange} placeholder='Email' />
          <input type='text' name='profilePic' onChange={this.handleChange} placeholder='Profile Pic' />
          <input type='text' name='twitter' onChange={this.handleChange} placeholder='Twitter' />
          <input type='text' name='website' onChange={this.handleChange} placeholder='Website' />
          <input type='text' name='facebook' onChange={this.handleChange} placeholder='Facebook' />
          <input type='text' name='bandCamp' onChange={this.handleChange} placeholder='Band Camp' />
          <select name='genre' onChange={this.handleChange}>
            <option value="indie">Indie</option>
            <option value="rock">Rock</option>
            <option value="hip-hop/rap">Hip-hop/Rap</option>
            <option value="country">Country</option>
          </select>  
          <textarea name="description" placeholder="Describe yourself/band..." onChange={this.handleChange}></textarea>
        </form>
        <button>Submit</button> 
      </section>
      </>
    );
  }

}

export default Form;


