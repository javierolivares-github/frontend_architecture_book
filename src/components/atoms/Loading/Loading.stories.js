import Loading from './Loading'

/**The **Loading** component is used for render a loading message.*/
export default {
  title: 'atoms/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    message: { 
      description: 'Specifies a custom loading message.',
      control: 'text'
    },
  },
};

export const Default = {
  args: {
    message: 'The data is loading...'
  },
}