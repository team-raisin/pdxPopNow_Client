import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

export default function Form({ onChange }) {
  return (
    <>
    <section>
      <h2>Create Artist Profile</h2>
      <form className={styles.createForm}>
        <input type='text' name='artistName' onChange={onChange} placeholder='Artist Name/Band Name' />
        <input type='text' name='Email' onChange={onChange} placeholder='email' />
        <input type='text' name='Profile Pic' onChange={onChange} placeholder='Profile Pic' />
        <input type='text' name='Twitter' onChange={onChange} placeholder='Twitter' />
        <input type='text' name='Facebook' onChange={onChange} placeholder='Facebook' />
        <input type='text' name='Band Camp' onChange={onChange} placeholder='Band Camp' />
        <textarea> </textarea>
        <select name='genre'>
          <option value="Indie">Indie</option>
          <option value="Rock">Rock</option>
          <option value="Hip-hop/Rap">Hip-hop/Rap</option>
          <option value="Country">Country</option>
        </select>  
      </form>
      <button>Submit</button> 
    </section>
    </>
  );

}

Form.propTypes = {
  onChange: PropTypes.func
};
