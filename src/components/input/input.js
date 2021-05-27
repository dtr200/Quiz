import React from 'react';

import './input.css';

const Input = ({ id, title }) => {
    const inputKey = `${id}inp`;
    const labelKey = `${id}lab`;
    
    return (
        <label key={labelKey}>
            {title}           
            <input type="text" key={inputKey} />
        </label>       
    )
}

export default Input;