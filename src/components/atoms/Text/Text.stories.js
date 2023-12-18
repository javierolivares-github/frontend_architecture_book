import Text from './Text'

/**The **Text** component is used for render text. It´s the equivalent of a paragraph element in HTML. */
export default {
  title: 'atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: { 
      description: 'Must be a text string.',
      control: 'text'
    },
  },
};

export const Default = {
  args: {
    children: 'This is a Text component!'
  },
}