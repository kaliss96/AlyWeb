//label.component.js
import React from 'react';

const CustomLabel = ({ children, ...otherProps }) => (
    <label className='custom-label' {...otherProps}>
        {children}
    </label>
)

export default CustomLabel;