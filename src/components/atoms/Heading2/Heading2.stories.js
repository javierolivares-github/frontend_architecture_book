import Heading2 from "./Heading2";

/**The **Heading2** component is used for render headings level 2. */
export default {
  title: 'atoms/Heading2',
  component: Heading2,
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
    children: 'This is a Heading2 component!'
  },
}