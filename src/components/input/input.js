import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { inputMessageAdded } from '../../actions';

import './input.css';

const Input = ({ id, title, alt, answers, inputMessageAdded }) => {

    const handleChange = (e) => {        
        inputMessageAdded(e.target.value, alt);
    }

    const setValue = () => {
        return answers[alt] ? answers[alt] : ""
    }

    return (
        <Fragment>
            <label htmlFor={id}>{title}</label>
            <input 
                className="form-control form-control-lg"
                type="text"
                onChange={handleChange}
                value={setValue()}
                id={id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Input);