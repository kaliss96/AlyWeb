// button.component.js
import React from 'react';

const CustomButton = ({ children, varian='', ...otherProps }) => (
    <button className={`${varian !== 'filled' ? 'custom-button' : 'custom-button-empty'}`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;