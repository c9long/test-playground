import React from 'react';

import { ButtonGroup } from '../ButtonGroup';

import * as ButtonStories from './Button.stories';

export default {
    title: 'Example/ButtonGroup',
    component: ButtonGroup,
}

const GroupTemplate = (args) => <ButtonGroup {...args} />;

export const Pair = GroupTemplate.bind({});

Pair.args = {
    buttons: [
        { ...ButtonStories.Primary.args },
        { ...ButtonStories.Secondary.args }
    ],
    orientation: 'horizontal',
};