import React, { useState, useEffect } from 'react';

import './alert.css';

const Alert = ({ data, closeAlert }) => {
    const success = 'alert alert-success alert-show';
    const warning = 'alert alert-warning alert-show';
    const hide = 'alert alert-hide';

    const [ display, setDisplay ] = useState(hide);

    let { show, isAdded, message } = data;

    useEffect(() => {
        console.log(show)
        if(show){
            isAdded ? setDisplay(success) : 
                      setDisplay(warning); 

            setTimeout(() => {
                closeAlert();
                setDisplay(hide);
            }, 2000)            
        }    
    }, [show])

    return (
        <div className={display}>
            {message}
        </div>
    )
}

export default Alert;