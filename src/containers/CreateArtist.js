import { connect } from 'react-redux';
import ArtistForm from '../components/form/ArtistForm';
import { createArtist } from '../actions/artists';


const mapDispatchToProps = dispatch => ({
  createArtist: (
    artistName, 
    email, 
    img,
    twitter,
    website,
    facebook,
    bandCamp,
    genre,
    description) => dispatch(createArtist(artistName, 
    email, 
    img,
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
