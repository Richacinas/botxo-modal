import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from 'redux/actions/modal';
import styles from './dashboard.scss';
import strings from '../../../strings';

import { Button, Modal, Tutorial} from 'components';

@connect(
  (state, props) => ({
    isModalOpened: state.modal.opened
  }),
  dispatch => bindActionCreators({...modalActions}, dispatch)
)

export default class Dashboard extends Component {
  static propTypes = {
    isModalOpened: PropTypes.bool,
    openModal: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { openModal, isModalOpened } = this.props;
    const tutorialStrings = strings.Tutorial;
    const dashboardStrings = strings.Dashboard;

    return (
      <div className="dashboard">
        <Button action={openModal}>
          {dashboardStrings.buttonText}
        </Button>
        <Modal opened = {isModalOpened} >
          <Tutorial 
            chapters = {tutorialStrings.chapters} 
            slides = {tutorialStrings.slides} 
            title = {tutorialStrings.title} 
            smallerTitle = {tutorialStrings.smallerTitle} 
          />
        </Modal>
      </div>
    );
  }
}