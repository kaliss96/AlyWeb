// button.component.js
import React from 'react';

const CustomButton = ({ children, ...otherProps }) => (
    <button className={'btn-send-resp'} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;