import { connect } from 'react-redux';
import ArtistForm from '../components/form/ArtistForm';
import { createArtist } from '../actions/artists';


const mapDispatchToProps = (dispatch, props) => ({
  createArtist(
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
    description) {
    const action = createArtist({
      artistName, 
      contact,
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
      genre,
      description
    });
    dispatch(action);
    action.payload.then(() => {
      props.history.push('/');
    });
  } 
});

export default connect(
  null,
  mapDispatchToProps
)(ArtistForm);
