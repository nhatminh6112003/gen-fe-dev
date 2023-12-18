import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Preview: Story = {
  args: {
    variant: "primary",
    label: 'Know more',
  },
};

// export const WithVariant: Story = {
//     args: {
//         variant: "primary",
//       },
//     render: (args) => <Button {...args}  />
//   };
  
