import { connect } from 'react-redux';
import ArtistForm from '../components/form/ArtistForm';
import { createArtist } from '../actions/artists';

// const mapStateToProps = state => ({
//   artists: getArtists(state),
//   email: getEmail(state)
// });

const mapDispatchToProps = dispatch => ({
  createArtist: (artistName, email, profilePic) => dispatch(createArtist(artistName, email, profilePic))

});

export default connect(
  null,
  mapDispatchToProps
)(ArtistForm);
