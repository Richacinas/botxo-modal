import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './modal.scss';

export default class Modal extends Component {
	static propTypes = {
		opened: PropTypes.bool,
    customClass: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]).isRequired
	};

	constructor(props) {
		super(props);
	}

	render() {
    const { opened, children, customClass } = this.props;

    const modalClass = classNames({
      'modal': true,
      'opened': opened,
      [customClass]: (customClass) ? true : false
    });

		return (
			<div className={modalClass}>
        <div className="box">
          {children}
        </div>
      </div>
		);
	}
}
