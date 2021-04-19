//label.component.js
import React from 'react';

const CheckInput = ({ children, ...otherProps }) => (
    <input className='form-check-input' type="checkbox" {...otherProps}>
        {children}
    </input>
)

export default CheckInput;