import Error from './Error'

/**The **Error** component is used for render a error message.*/
export default {
  title: 'atoms/Error',
  component: Error,
  tags: ['autodocs'],
  argTypes: {
    message: { 
      description: 'Specifies a custom error message.',
      control: 'text'
    },
  },
};

export const Default = {
  args: {
    message: 'Something went wrong...'
  },
}