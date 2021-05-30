import React, { Fragment, useState } from 'react';
import Option from '../option';

import './select.css';

const Select = ({ id, details, title }) => {

    const [ value, setValue ] = useState('');

    const { list } = details.options;

    const selectHandler = (e) => {
        const { value } = e.target;
        setValue(value);
    }

    return (
        <Fragment>
            <label 
                htmlFor={id}>
                {title}
            </label>
            <select 
                className="form-control form-control-lg"
                value={value}
                onChange={selectHandler}
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