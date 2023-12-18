import React from 'react';
import propTypes from 'prop-types';
import './button.css';

const Button = ({ onClick, disabled, label }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="button"
      data-testid="button-container"
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func,
  disabled: propTypes.bool,
  label: propTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: undefined,
  disabled: false,
};