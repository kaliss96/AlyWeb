//image.component.js
import React from 'react';

const ComponentImage = ({ ...otherProps }) => (
    <img {...otherProps} alt='test-image' />
)

export default ComponentImage;