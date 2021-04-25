import React from 'react'
import './InputFormText.css'

const InputFormText = ({errors={}, reference={},keypress, placeholder, title, name, type, pattern={}}) => {
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
                placeholder={placeholder}
            />
            </div>
            {errors.nombre && (
            <label className="error-label">
                {errors.nombre.message}
            </label>
            )}
        </div>
    )
}

export default InputFormText;


