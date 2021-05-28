import React from 'react';

import './option.css';

const Option = ({ value: { name } }) => {
    
    return (
        <option>{name}</option>
    )
}

export default Option;