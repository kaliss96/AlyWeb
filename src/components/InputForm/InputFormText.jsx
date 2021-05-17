import React from 'react'
import './InputFormText.css'

const InputFormText = ({errors={}, reference={},handlechange,keypress, placeholder, title, name, type, pattern}) => {
    return (
        <div className="form-group">
            <label className="label-input" type="text">
                {title}
            </label>
            <div className='group'>
            <input
                pattern={pattern}
                type={type}
                className ="form-input"
                name={name}
                id={name}
                ref={reference}
                autoComplete="off"
				onKeyPress={keypress}
				onChange={handlechange}
                placeholder={placeholder}
            />
            </div>
            {errors && (
            <label className="error-label">
                {errors.message}
            </label>
            )}
        </div>
    )
}

export default InputFormText;