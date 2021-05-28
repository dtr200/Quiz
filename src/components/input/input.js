import React, {Fragment} from 'react';

import './input.css';

const Input = ({ id, title }) => {
    
    return (
        <Fragment>
            <label htmlFor={id}>{title}</label>
            <input 
                className="form-control form-control-lg"
                type="text"
                id={id}/>
        </Fragment>              
    )
}

export default Input;