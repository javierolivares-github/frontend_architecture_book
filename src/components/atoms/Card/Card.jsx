import React from 'react';
import propTypes from 'prop-types';
import './card.css';

const Card = ({ children, highlight }) => {
  return (
    <div
      data-testid='card-container'
      className={ highlight ? 'card highlight' : 'card'}
    >
      {children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  children: propTypes.any.isRequired,
  highlight: propTypes.bool,
};

Card.defaultProps = {
  children: 'This is a Card component!',
  highlight: false,
};