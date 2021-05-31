import React, { useState, useEffect } from 'react';
import InputFile from '../input-file';

import './checkbox.css';

const Checkbox = ({ id, name, onCheck }) => {

    const [ check, setCheck ] = useState(false); 
    
    const checkHandler = () => {
        setCheck(prev => !prev);
        onCheck(!check);                 
    }

    return (
        <div className="checkbox__row form-check"
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
    )
}

const CheckboxContainer = ({ title, details, alt }) => {

    const { link } = details;
    const { list } = details.options;

    const show = `form-check-label form-control-lg checkbox__label checkbox__label-file`;
    const hide = `${show} hide`;
    
    const [ inputVisible, setInputVisible ] = useState(hide);
    const [ checkedAmount, setCheckedAmount ] = useState(0);

    const checkboxHandler = (check) => {
        const value = check ? 1 : -1;
        setCheckedAmount(prev => prev + value);                
    }

    useEffect(() => {
        if(link){
            const inputClass = checkedAmount ? show : hide;
            setInputVisible(inputClass); 
        }        
    })

    return (
        <div>
            <label className="">{title}</label>
                {
                    list.map(({ id, name }) => {
                        const blockKey = `${id}b`;

                        return (
                            <Checkbox 
                                name={name}
                                onCheck={checkboxHandler}
                                key={blockKey}
                                id={id} />
                        )
                    })
                }
            <InputFile visible={inputVisible}/> 
        </div>    
    )
}

export default CheckboxContainer;