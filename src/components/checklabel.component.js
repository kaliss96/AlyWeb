//label.component.js
import React from 'react';

const CheckLabel = ({ children, ...otherProps }) => (
    <label className='form-check-label' {...otherProps}>
        {children}
    </label>
)

export default CheckLabel;