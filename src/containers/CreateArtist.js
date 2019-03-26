import { connect } from 'react-redux';
import ArtistForm from '../components/form/ArtistForm';
import { createArtist } from '../actions/artists';

// const mapStateToProps = state => ({
//   artists: getArtists(state),
//   email: getEmail(state)
// });

const mapDispatchToProps = dispatch => ({
  createArtist: (
    artistName, 
    email, 
    profilePic,
    twitter,
    website,
    facebook,
    bandCamp,
    genre,
    description) => dispatch(createArtist(artistName, 
    email, 
    profilePic,
    twitter,
    website,
    facebook,
    bandCamp,
    genre,
    description))

});

export default connect(
  null,
  mapDispatchToProps
)(ArtistForm);
