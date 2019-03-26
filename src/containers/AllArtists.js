import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArtistList from '../components/artists/ArtistList';
import ArtistSearch from '../components/artist-search/ArtistSearch';
import { connect } from 'react-redux';
import { getArtists } from '../selectors/artists';
import { fetchArtists } from '../actions/artists';

const mapStateToProps = state => ({
  artists: getArtists(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchArtists());
  }
});
class AllArtists extends PureComponent {
  static propTypes = {
    artists: PropTypes.array.isRequired,
    fetch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  handleSearch = state => {
    event.preventDefault();
    console.log('searched', state);
  }

  render() {
    const { artists } = this.props;
    return (
      <>
        <ArtistSearch handleSearch={this.handleSearch}/>
        <ArtistList artists={artists}/>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllArtists);
