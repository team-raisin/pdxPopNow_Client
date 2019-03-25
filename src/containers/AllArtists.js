import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArtistList from '../components/artists/ArtistList';
import { connect } from 'react-redux';
import { getArtists } from '../selectors/artists';

const mapStateToProps = state => ({
  artists: getArtists(state)
});


class AllArtists extends PureComponent {
  static propTypes = {
    artists: PropTypes.array.isRequired
  }
  render() {
    const { artists } = this.props;
    return (
      <ArtistList artists={artists}/>
    );
  }
}

export default connect(mapStateToProps, null)(AllArtists);
