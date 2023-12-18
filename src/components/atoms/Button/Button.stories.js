import Button from './Button';

/** The **Button** component is employed for displaying a button that triggers an action upon a click event. */
export default {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { 
      description: 'Specifies the label of the Button.',
      control: 'text' 
    },
    onClick: {
      description: 'Fires an action when the Button is clicked.',
    },
    disabled: { 
      description: 'Disables the Button.',
      control: 'boolean' 
    },
  },
};

/** Main Button component.*/
export const Default = {
  args: {
    label: 'Button',
  },
};

/** Disabled Button component.*/
export const Disabled = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

