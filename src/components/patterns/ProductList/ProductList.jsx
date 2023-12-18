import React from 'react';
import propTypes from 'prop-types';
import Loading from '../../atoms/Loading';
import Error from '../../atoms/Error';
import ProductListItem from '../ProductListItem';
import './ProductList.css';

export const statusTypes = {
  loading: 'loading',
  errored: 'errored',
  loaded: 'loaded',
};

const ProductList = ({ status, data }) => {
  if (status === statusTypes.loading) {
    return <Loading message='The data is loading...'/>
  }

  if (status === statusTypes.errored) {
    return <Error message="Something went wrong..." />
  }

  return (
    <div className='product-list'>
      {data?.map((product) => (
        <ProductListItem 
          key= { product.id }
          name= { product.name }
          price= { product.price }
          imageUrl= { product.imageUrl }
          isOnSale={ product.isOnSale }
          isSoldOut= { product.isSoldOut }
        />
      ))}
    </div>
  );
};

export default ProductList;

ProductList.propTypes = {
  status: propTypes.oneOf(['loading', 'errored', 'loaded']).isRequired,
  data: propTypes.array,
};
