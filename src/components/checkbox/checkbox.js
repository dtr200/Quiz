import React, {Fragment} from 'react';

import './checkbox.css';

const Checkbox = ({ id, title, details }) => {
    const checkboxKey = `${id}ch`;
    const labelKey = `${id}chl`;

    const { list } = details.options;
    console.log(list)
    
    return (
        <Fragment>
            <label className="">{title}</label>
            {
                list.map(({ id, name }) => {
                    return (
                        <div className="checkbox__row form-check">
                            <input 
                                className="checkbox__main form-check-input"
                                type="checkbox" 
                                key={checkboxKey}
                                id={id}/>
                            <label 
                                className="form-check-label form-control-lg checkbox__label"
                                key={labelKey}
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