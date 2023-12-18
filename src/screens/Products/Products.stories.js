import Products from './Products';
import { mockServer } from './mockServer';
mockServer();

/**The **Products** component renders the products screen. It's made of a heading, a text and a list of products fetched from an API. */
export default {
  title: 'screens/Products',
  component: Products,
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};