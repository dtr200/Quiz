import React, {Fragment} from 'react';

import './checkbox.css';

const Checkbox = ({ title, details }) => {

    const { list } = details.options;
    
    return (
        <Fragment>
            <label className="">{title}</label>
            {
                list.map(({ id, name }) => {
                    const blockKey = `${id}b`;

                    return (
                        <div 
                            className="checkbox__row form-check"
                            key={blockKey}>
                            <input 
                                className="checkbox__main form-check-input"
                                type="checkbox" 
                                id={id}/>
                            <label 
                                className="form-check-label form-control-lg checkbox__label"
                                htmlFor={id}>
                                {name}
                            </label> 
                        </div>  
                    )
                })
            }
        </Fragment>              
    )
}

export default Checkbox;