import React, { Fragment, useState } from 'react';

import './textarea.css';

const Textarea = ({ id, title }) => {

    const [ text, setText ] = useState('');

    const labelKey = `${id}tlab`;
    const areaKey = `${id}tar`;

    const areaHandler = (e) => {
        const { value } = e.target;
        setText(value);
    }
    
    return (
        <Fragment>
            <label 
                htmlFor={id}
                key={labelKey}>
                {title}
            </label>
            <textarea
                className="form-control form-control-lg" 
                id={id}
                key={areaKey}
                value={text}
                onChange={areaHandler}>
            </textarea>            
        </Fragment>        
    )
}

export default Textarea;