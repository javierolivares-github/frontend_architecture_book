import React from 'react';
import propTypes from 'prop-types';
import Card from '../../atoms/Card';
import Heading2 from '../../atoms/Heading2';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const ProductListItem = ({ 
  name,
  imageUrl,
  price,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) => {
  return (
    <Card highlight={isOnSale}>
      <Heading2>
        <span>{name}</span>
        <span>{ isOnSale && " (On Sale)" }</span>
        <span>{ isSoldOut && " (Sold Out)" }</span>
      </Heading2>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button 
        onClick={onAddToCart}
        disabled={isSoldOut}
        label={ isSoldOut ? "Sold out" : "Add to cart" }
      />
    </Card>
  );
};

export default ProductListItem;

ProductListItem.propTypes = {
  name: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  onAddToCart: propTypes.func,
  isSoldOut: propTypes.bool,
  isOnSale: propTypes.bool,
};

ProductListItem.defaultProps = {
  name: 'Moccachino',
  imageUrl: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  price: '$1.9',
  isSoldOut: false,
  isOnSale: false,
};