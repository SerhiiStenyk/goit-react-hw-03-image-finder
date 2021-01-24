import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick, title }) => {
  return (
    <>
      <button className={s.button} onClick={onClick} type="button">
        {title}
      </button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
