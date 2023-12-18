import React from "react";
import propTypes from 'prop-types';
import './error.css';

const Error = ({ message }) => {
  return (
    <p 
      data-testid="error-container"
      className='error'
    >
      <b>{message}</b>
    </p>
  );
};

export default Error;

Error.propTypes = {
  message: propTypes.string.isRequired,
};

Error.defaultProps = {
  message: 'This is a error component!',
};