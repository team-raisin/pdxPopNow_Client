import { connect } from 'react-redux';
import ArtistForm from '../components/form/ArtistForm';
import { createArtist } from '../actions/artists';


const mapDispatchToProps = dispatch => ({
  createArtist: (
    artistName, 
    contact,
    email, 
    img, 
    website,
    facebook,
    twitter,
    instagram,
    bandCamp,
    soundcloud,
    youtube,
    vimeo,
    genre,
    description) => dispatch(createArtist(  
    artistName, 
    email, 
    img, 
    twitter,
    website,
    facebook,
    bandCamp,
    soundcloud,
    instagram,
    youtube,
    vimeo,
    contact,
    genre,
    description))

});

export default connect(
  null,
  mapDispatchToProps
)(ArtistForm);
