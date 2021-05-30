import React, { Fragment, useState } from 'react';
import InputFile from '../input-file';

import './checkbox.css';

const Checkbox = ({ id, name }) => {

    const show = `form-check-label form-control-lg checkbox__label checkbox__label-file`;
    const hide = `${show} hide`;

    const [ check, setCheck ] = useState(false); 
    const [ inputVisible, setInputVisible ] = useState(hide);
    
    const checkHandler = () => {

        setCheck(prev => !prev);

        const inputClass = !check ? show : hide;
        setInputVisible(inputClass);
    }

    return (
        <div className="checkbox__row form-check">
           <div 
                className="checkbox__row-item"
                onClick={checkHandler}>
                <input 
                    className="checkbox__main form-check-input"
                    type="checkbox" 
                    id={id}
                    checked={check}
                    onChange={() => null}/>
                <label 
                    className="form-check-label form-control-lg checkbox__label"
                    htmlFor={id}>
                    {name}
                </label>
            </div> 
            <InputFile visible={inputVisible}/>
        </div>        
    )
}

const CheckboxContainer = ({ title, details }) => {

    const { list } = details.options;

    return (
        <Fragment>
            <label className="">{title}</label>
            {
                list.map(({ id, name }) => {
                    const blockKey = `${id}b`;

                    return (
                          <Checkbox 
                            name={name}
                            key={blockKey}
                            id={id} />
                    )
                })
            }
        </Fragment>              
    )
}

export default CheckboxContainer;