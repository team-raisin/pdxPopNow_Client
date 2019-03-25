import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArtistList from '../components/artists/ArtistList';
import { connect } from 'react-redux';
import { getArtists } from '../selectors/artists';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

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
      <>
        <Header />
        <ArtistList artists={artists}/>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, null)(AllArtists);
