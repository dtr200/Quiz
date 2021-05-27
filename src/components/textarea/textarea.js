import React from 'react';

import './textarea.css';

const Textarea = ({ id, title }) => {
    const labelKey = `${id}tlab`;
    const areaKey = `${id}tar`;
    
    return (
        <label 
            htmlFor={id}
            key={labelKey}>
            {title}
            <textarea 
                id={id}
                key={areaKey}>
            </textarea>
        </label>
    )
}

export default Textarea;