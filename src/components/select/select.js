import React from 'react';
import Option from '../option';

import './select.css';

const Select = ({ id, details, title }) => {
    const { list, multiple } = details.options;
    const selectKey = `${id}sel`;
    const labelKey = `${id}slab`;

    return (
        <label 
            key={labelKey}>
            {title}
            <select 
                key={selectKey} 
                multiple={multiple}>
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
        </label>
    )
}

export default Select;