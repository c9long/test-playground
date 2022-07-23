import React from 'react';
import PropTypes from 'prop-types';

function ButtonGroup({ children, spacing = 2, direction = "row", wrap = false}) {
    const style = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexDirection: direction,
    }
    return <div style={style}>{children}</div>
}