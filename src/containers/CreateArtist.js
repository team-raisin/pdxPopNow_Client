import { connect } from 'react-redux';
import ArtistForm from '../components/form/ArtistForm';
import { getArtists, getEmail } from '../selectors/artists';
import { createArtist, updateEmail } from '../actions/artists';

const mapStateToProps = state => ({
  artists: getArtists(state),
  email: getEmail(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(email, event) {
    event.preventDefault();
    console.log('!!!!', event);
    dispatch(createArtist({ email }));
  },

  emailChange({ target }) {
    dispatch(updateEmail(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistForm);
