import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setSession } from '../../actions/session';
import { getToken } from '../../selectors/session';
import { ROUTES } from '../../routes/routes';

class Callback extends React.PureComponent {
  static propTypes = {
    handleAuth: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    if(this.props.token) {
      return <Redirect to={ROUTES.ArtistForm.linkTo()} />;
    }
    return <h1>LOADING</h1>;
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
