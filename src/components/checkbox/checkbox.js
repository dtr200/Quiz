import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { checkboxDataReceived } from '../../actions';
import InputFile from '../input-file';

import './checkbox.css';

const Checkbox = ({ id, name, onCheck }) => {

    const [ check, setCheck ] = useState(false); 
    
    const checkHandler = () => {
        setCheck(prev => !prev);
        onCheck(!check, id);                 
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

const CheckboxContainer = ({ title, details, alt, 
                             answers, checkboxDataReceived }) => {

    const { link } = details;
    const { list } = details.options;

    const show = `form-check-label form-control-lg checkbox__label checkbox__label-file`;
    const hide = `${show} hide`;
    
    const [ inputVisible, setInputVisible ] = useState(hide);

    const checkboxHandler = (check, id) => {
        checkboxDataReceived(id, alt);
    }

    useEffect(() => {
        if(link && answers[alt]){
            const { idList } = answers[alt];
            const inputClass = idList.length ? show : hide
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

const mapStateToProps = ({ answers }) => {
    return {
        answers
    }
}

const mapDispatchToProps = {
    checkboxDataReceived
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer);