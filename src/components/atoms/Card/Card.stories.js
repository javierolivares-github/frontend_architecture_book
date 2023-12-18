import Card from './Card';

/**The **Card** component serves as a container for other elements. Arrange the content in a column and apply some styling. */
export default {
  title: 'atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: { 
      description: 'Specifies the content of the Card.',
      control: 'text'
    },
    highlight: { 
      description: 'Apply a highlighted background color.',
      control: 'boolean'
    },
  },
};

/**Default Card component. */
export const Default = {
  args: {
    children: 'This is a Card component'
  },
};

/**Highlighted Card component. */
export const Highlighted = {
  args: {
    children: 'This is a Card component',
    highlight: true,
  },
};