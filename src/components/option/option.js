import React from 'react';

import './option.css';

const Option = ({ value: { id, name } }) => {
   const optionKey = `${id}opt`;

    return (
        <option 
            key={optionKey}>
            {name}
        </option>
    )
}

export default Option;