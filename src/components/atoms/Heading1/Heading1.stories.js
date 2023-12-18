import Heading1 from "./Heading1";

/**The **Heading1** component is used for render headings level 1. */
export default {
  title: 'atoms/Heading1',
  component: Heading1,
  tags: ['autodocs'],
  argTypes: {
    children: { 
      description: 'Can be a text string or a span tag.',
      control: 'text'
    },
  },
};

export const Default = {
  args: {
    children: 'This is a Heading1 component!'
  },
}