import { connect } from 'react-redux';
import ArtistForm from '../components/form/ArtistForm';
import { getArtists } from '../selectors/artists';
import { createArtist } from '../actions/artists';

const mapStateToProps = state => ({
  artistName: getArtists(state)
});

const mapDispatchToProps = dispatch => ({


  handleSubmit(artistName, email, event) {
    event.preventDefault();
    dispatch(createArtist({ artistName, email }));
  }


});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistForm);
