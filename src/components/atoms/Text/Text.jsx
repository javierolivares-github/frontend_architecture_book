import React from "react";
import propTypes from 'prop-types';

const Text = ({ children }) => {
  return (
    <p data-testid="text-container">
      {children}
    </p>
  );
};

export default Text;

Text.propTypes = {
  children: propTypes.string.isRequired,
};

Text.defaultProps = {
  children: 'This is a Text Component!',
};