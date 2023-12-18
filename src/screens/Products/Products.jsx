import React, { useState, useEffect } from 'react';
import ProductList, { statusTypes } from '../../components/patterns/ProductList';
import Heading1 from '../../components/atoms/Heading1';
import Text from '../../components/atoms/Text';

const Products = () => {
  const [ productState, setProductState ] = useState({
    status: statusTypes.loading,
    data: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const productsFetch = await fetch('api/products');
        const productsResponse = await productsFetch.json();
        setProductState({
          status: statusTypes.loaded,
          data: productsResponse.data,
        });
      } catch (error) {
        console.log(error);
        setProductState({
          status: statusTypes.errored,
          data: [],
        });  
      }
    };

    getData();
  }, []);

  return (
    <div data-testid='products-container'>
      <Heading1>Products</Heading1>
      <Text>Explore the exquisite flavors of our changing menu, revealing a symphony of seasonal drinks and foods that dance through the palate, inviting you to savor the essence of each passing season:</Text>

      <ProductList 
        status={productState.status} 
        data={productState.data}
      />
    </div>
  );
};

export default Products;

