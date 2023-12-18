import ProductList from './ProductList';
import { productData } from './productData';

/**The **ProductList** component renders a list of products based on a product data. */
export default {
  title: 'patterns/ProductList',
  component: ProductList,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Specifies the component state and takes a decision based on it.',
      control: 'text',
    },
    data: {
      description: 'Receive the product data.',
      control: 'array',
    },
  },
};

/**The **ProductList** component in a loaded state. */
export const Loaded = {
  args: {
    status: 'loaded',
    data: productData,
  },
};

/**The **ProductList** component in a loading state. */
export const Loading = {
  args: {
    status: 'loading',
  },
};

/**The **ProductList** component in an errored state. */
export const Errored = {
  args: {
    status: 'errored',
  },
};
