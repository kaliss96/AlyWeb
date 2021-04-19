// form-input.component.js
import React, { useState } from 'react';
const SelectInput = ({ handleChange, label, type, ...other  }) => {

    return (

    <div className='group'>
        <select onChange={handleChange} {...other}>
            <option>
                1
            </option>
            <option>
                2
            </option>
        </select>
       
    </div>

)}

export default SelectInput;
