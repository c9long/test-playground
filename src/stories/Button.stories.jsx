import React, { useState } from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ButtonTemplate = (args) => <Button {...args} />;

export const Primary = ButtonTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  backgroundColor: "green",
  size: 'medium',
  label: 'Cloud',
  font: null,
};

Primary.storyName = 'I am the Primary now';

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  label: 'Press Me!',
  backgroundColor: 'violet',
};

Secondary.storyName = 'I am violet now';

export const Large = ButtonTemplate.bind({});
Large.args = {
  ...Secondary.args,
  size: 'extra small',
  backgroundColor: 'red',
  label: 'Hi I\'m tiny!',
};

export const Small = ButtonTemplate.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
