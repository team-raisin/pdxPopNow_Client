import React from 'react';
import { connect } from 'react-redux';
import { setToken } from '../../actions/session';
import PropTypes from 'prop-types';
class Callback extends React.PureComponent {
  static propTypes = {
    handleAuth: PropTypes.func,
    history: PropTypes.func
  }
  componentDidMount() {
    this.props.handleAuth()
      .then(() => {
        this.props.history.replace('/');
      });
  }
  render() {
    return <h1>CALLBACK</h1>;
  }
}

export default connect(
  null,
  dispatch => ({
    handleAuth() {
      const action = setToken();
      dispatch(action);
      return action.payload;
    }
  })
)(Callback);
