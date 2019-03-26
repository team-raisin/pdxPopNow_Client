import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArtistList from '../components/artists/ArtistList';
import ArtistSearch from '../components/artist-search/ArtistSearch';
import { connect } from 'react-redux';
import { getArtists } from '../selectors/artists';
import { fetchArtists } from '../actions/artists';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

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
        <Header />
        <ArtistSearch handleSearch={this.handleSearch}/>
        <ArtistList artists={artists}/>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllArtists);
