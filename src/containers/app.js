import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from 'redux/actions/app';
import styles from './app.scss';
 
import { Dashboard } from 'components';

@connect(
  (state, props) => ({
    loaded: state.app.loaded
  }),
  dispatch => bindActionCreators({...appActions}, dispatch)
)

export default class AppContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    loaded: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    return (
      <div className="app">
        <Dashboard />
      </div>
    );
  }
}