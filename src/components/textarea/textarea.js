import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { inputMessageAdded } from '../../actions';

import './textarea.css';

const Textarea = ({ id, title, alt, answers, inputMessageAdded }) => {

    const labelKey = `${id}tlab`;
    const areaKey = `${id}tar`;

    const areaHandler = (e) => {
        const { value } = e.target;
        inputMessageAdded(value, alt);
    }

    const getValue = () => {
        return answers[alt] ? answers[alt] : ''
    }
    
    return (
        <Fragment>
            <label 
                htmlFor={id}
                key={labelKey}>
                {title}
            </label>
            <textarea
                className="form-control form-control-lg" 
                id={id}
                key={areaKey}
                value={getValue()}
                onChange={areaHandler}>
            </textarea>            
        </Fragment>        
    )
}

const mapStateToProps = ({ answers }) => {
    return {
        answers
    }
}

const mapDispatchToProps = {
    inputMessageAdded
}

export default connect(mapStateToProps, mapDispatchToProps)(Textarea);