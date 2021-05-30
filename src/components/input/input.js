import React, { Fragment, useState } from 'react';

import './input.css';

const Input = ({ id, title }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <Fragment>
            <label htmlFor={id}>{title}</label>
            <input 
                className="form-control form-control-lg"
                type="text"
                onChange={handleChange}
                value={value}
                id={id}/>
        </Fragment>              
    )
}

export default Input;