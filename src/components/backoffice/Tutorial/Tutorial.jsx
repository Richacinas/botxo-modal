import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from 'redux/actions/modal';
import * as tutorialActions from 'redux/actions/tutorial';
import styles from './tutorial.scss';

@connect(
  (state, props) => ({
    actualChapter:  state.tutorial.chapter,
    actualSlide:    state.tutorial.slide
  }),
  dispatch => bindActionCreators({...modalActions, ...tutorialActions}, dispatch)
)
export default class Tutorial extends Component {
  static propTypes = {
    title: PropTypes.string,
    smallerTitle: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.handleBulletClick =  this.handleBulletClick.bind(this);
    this.handleMenuClick =    this.handleMenuClick.bind(this);
  }

  handleBulletClick(idx) {
    this.props.setTutorialSlide(idx);
  }

  handleMenuClick(idx) {
    this.props.setTutorialChapter(idx);
  }

  render() {
    const {title, smallerTitle, chapters, slides, closeModal } = this.props;

    const Bullets = (props) => {
      const slides = props.slides;

      const listItems = slides.map((bullet, idx) =>
        <li key={"bullet" + idx} onClick={this.handleBulletClick.bind(null, idx)}><span className="bullet"></span></li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }

    const Menu = (props) => {
      const chapters = props.chapters;

      const listItems = chapters.map((chapter, idx) =>
        <li key={"chapter" + idx} onClick={this.handleMenuClick.bind(null, idx)}>
          <span className="number">{idx}</span>
          <span className="menuTitle">{chapter.title}</span>
          <span className="menuText">{chapter.text}</span>
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }


    return (
      <div className="tutorial">
        <div className="titles">
          <h2>{title}</h2>
          <p>{smallerTitle}</p>
        </div>
        <div className="content">
          <div className="chapters">
            <Menu chapters = {chapters} />
          </div>
          <div className="chapterContent" style={{backgroundColor: slides[this.props.actualSlide]}}>

          </div>
        </div>
        <div className="footer">
          <span className="linkStyled skip" onClick={closeModal}>Skip tutorial</span>
          <Bullets slides = {slides} />
          <span className="linkStyled next" onClick={closeModal}>Next</span>
        </div>
      </div>
    );
  }
}
