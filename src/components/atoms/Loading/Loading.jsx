import React from "react";
import propTypes from 'prop-types';

const Loading = ({ message }) => {
  return (
    <p data-testid="loading-container">
      <b>{message}</b>
    </p>
  );
};

export default Loading;

Loading.propTypes = {
  message: propTypes.string.isRequired,
};

Loading.defaultProps = {
  message: 'This is a Loading Component!',
};