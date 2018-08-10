import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
 
import styles from './button.scss';

const Button = (props) => {
  const {customClass, action, children } = props;

  const buttonClass = classNames({
    'button': true,
    [customClass]: (customClass) ? true : false
  });

  return (
    <button className={buttonClass} onClick={action}>
      {children}
    </button>
  )
}

Button.propTypes = {
  action:       PropTypes.func,
  customClass:  PropTypes.string
};

export default Button;
