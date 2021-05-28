import React, {Fragment} from 'react';

import './textarea.css';

const Textarea = ({ id, title }) => {
    const labelKey = `${id}tlab`;
    const areaKey = `${id}tar`;
    
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
                key={areaKey}>
            </textarea>            
        </Fragment>        
    )
}

export default Textarea;