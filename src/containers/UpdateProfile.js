import { connect } from 'react-redux';
import { updateArtistName, updateEmail } from '../actions/artistProfile';
import UpdateArtistProfile from '../components/profile/UpdateArtistProfile';

const mapDispatchToProps = dispatch => ({
  updateArtistName: (artistName) => dispatch(updateArtistName(artistName)),
  updateEmail: (email) => dispatch(updateEmail(email))
});

export default connect(
  null,
  mapDispatchToProps
)(UpdateArtistProfile);
