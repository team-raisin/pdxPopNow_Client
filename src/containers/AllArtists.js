import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArtistList from '../components/artists/ArtistList';
import ArtistSearch from '../components/artist-search/ArtistSearch';
import { connect } from 'react-redux';
import { getFilteredArtists } from '../selectors/artists';
import { fetchArtists, artistSearch } from '../actions/artists';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const mapStateToProps = state => ({
  artists: getFilteredArtists(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchArtists());
  },

  artistSearch: (search) => dispatch(artistSearch(search))
});

class AllArtists extends PureComponent {
  static propTypes = {
    artists: PropTypes.array.isRequired,
    fetch: PropTypes.func,
    artistSearch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const { artists } = this.props;
    console.log(artists, 'allartists');
    return (
      <>
        <Header />
        <ArtistSearch artistSearch={this.props.artistSearch} />
        <ArtistList artists={artists}/>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllArtists);
