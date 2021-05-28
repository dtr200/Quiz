import React, {Fragment} from 'react';
import Option from '../option';

import './select.css';

const Select = ({ id, details, title }) => {
    const { list } = details.options;

    return (
        <Fragment>
            <label 
                htmlFor={id}>
                {title}
            </label>
            <select 
                className="form-control form-control-lg"
                id={id}>
                { 
                    list.map(item => {
                        return (
                            <Option 
                                key={item.id} 
                                value={item} />
                        )
                    }) 
                }
            </select>
            
        </Fragment>
    )
}

export default Select;