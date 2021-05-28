import React, {Fragment} from 'react';
import Option from '../option';

import './select.css';

const Select = ({ id, details, title }) => {
    const { list } = details.options;
    const selectKey = `${id}sel`;
    const labelKey = `${id}slab`;

    return (
        <Fragment>
            <label 
                key={labelKey}
                htmlFor={id}>
                {title}
            </label>
            <select 
                className="form-control form-control-lg"
                key={selectKey}
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