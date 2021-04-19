import React from 'react';
import {Link} from 'react-router-dom'

const CustomLink = ({ caption, varian='', to }) => (
    <Link className={`${varian !== 'filled' ? 'custom-button' : 'custom-button-empty'}`} to={to}>
        {caption}
    </Link>
)

export default CustomLink;