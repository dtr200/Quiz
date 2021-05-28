import React, {Fragment} from 'react';

import './input.css';

const Input = ({ id, title }) => {
    const inputKey = `${id}inp`;
    const labelKey = `${id}lab`;
    
    return (
        <Fragment>
            <label 
                key={labelKey}
                htmlFor={id}>
                {title}
            </label>
            <input 
                className="form-control form-control-lg"
                type="text" 
                key={inputKey}
                id={id}/>
        </Fragment>              
    )
}

export default Input;