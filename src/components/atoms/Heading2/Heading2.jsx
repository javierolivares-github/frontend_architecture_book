import React from "react";
import propTypes from 'prop-types';

const Heading2 = ({ children }) => {
  return (
    <h2 data-testid="heading2-container">
      {children}
    </h2>
  );
};

export default Heading2;

Heading2.propTypes = {
  children: propTypes.any.isRequired,
};

Heading2.defaultProps = {
  children: 'This is a Heading Component!'
};
