import React from "react";
import propTypes from 'prop-types';

const Heading1 = ({ children }) => {
  return (
    <h1 data-testid="heading1-container">
      {children}
    </h1>
  );
};

export default Heading1;

Heading1.propTypes = {
  children: propTypes.any.isRequired,
};

Heading1.defaultProps = {
  children: 'This is a Heading Component!'
};