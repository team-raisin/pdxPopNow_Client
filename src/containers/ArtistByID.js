import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArtist } from '../actions/artists';
import { getArtist } from '../selectors/artistDetail';
import ArtistDetail from '../components/artist-detail/ArtistDetail';

const mapStateToProps = state => ({
  artist: getArtist(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchArtist(props.match.params.id));
  }
});

class ArtistById extends PureComponent {
  state = {
    artist: {}
  }
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    artist: PropTypes.object
  }
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const { artist } = this.props;
    if(!artist) return null;
    return (
      <ArtistDetail artist={artist}/>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistById));
