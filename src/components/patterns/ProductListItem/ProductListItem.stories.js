import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';

/**The **ProductListItem** component renders a single item from the product list. It is composed of Card, Heading, Text, and Button components.  */
export default {
  title: 'patterns/ProductListItem',
  component: ProductListItem,
  tags: ['autodocs'],
  argTypes: {
    name: { 
      description: 'Specifies the title of the item.',
      control: 'text',
    },
    imageUrl: { 
      description: 'Specifies the image of the item.',
      control: 'text',
    },
    price: { 
      description: 'Specifies the price of the element.',
      control: 'text',
    },
    onAddToCart: { 
      description: 'Specifies a callback function that is fired when the button is clicked.',
    },
    isOnSale: { 
      description: 'Specifies that the item is on sale.',
      control: 'boolean',
    },
    isSoldOut: { 
      description: 'Specifies that the item is sold out.',
      control: 'boolean',
    },
  },
};

/**Default ProductListItem component. */
export const Default = {
  args: {
    name: 'Latte',
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
    price: '$3.20',
    onAddToCart: action("Add to cart clicked!"),
    isOnSale: false,
    isSoldOut: false,
  },
};

/**OnSale ProductListItem component. */
export const OnSale = {
  args: {
    name: 'Latte',
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
    price: '$3.20',
    onAddToCart: action("Add to cart clicked!"),
    isOnSale: true,
    isSoldOut: false,
  },
};

/**SoldOut ProductListItem component. */
export const SoldOut = {
  args: {
    name: 'Latte',
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
    price: '$3.20',
    onAddToCart: action("Add to cart clicked!"),
    isOnSale: false,
    isSoldOut: true,
  },
};

