// button.component.js
import React from 'react';

const RegisterButton = ({ children, ...otherProps }) => (
    <button className = "btn btn-success btn-block my-2" {...otherProps}>
        {children}
    </button>
)

export default RegisterButton;