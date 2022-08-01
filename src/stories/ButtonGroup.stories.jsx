import React from 'react';

import ButtonGroup from '../parts/ButtonGroup';

export default {
    title: 'Parts/ButtonGroup',
    part: ButtonGroup,
    argTypes: {
        num: { type: "number", defaultValue: 4 }
    }
}

const GroupTemplate = ({ num, ...args }) => (<ButtonGroup {...args} >{[...Array(num).keys()].map(n => (<div style={{width: "50px", height: "50px", backgroundColor: "red",
display: "flex", justifyContent: "center", alignItems: "center"}} >{n + 1} </div>))} </ButtonGroup>)

export const Horizontal = GroupTemplate.bind({})
Horizontal.args = {
    num: 40,
    direction: "row",
    spacing: 2,
    wrap: false,
}

export const Vertical = GroupTemplate.bind({})
Vertical.args = {
    direction: "column",
    spacing: 2,
    wrap: false,
}

/**export const Pair = GroupTemplate.bind({});

Pair.args = {
    buttons: [
        { ...ButtonStories.Primary.args },
        { ...ButtonStories.Secondary.args }
    ],
    orientation: 'horizontal',
};*/