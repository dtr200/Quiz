import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { inputMessageAdded } from '../../actions';
import Option from '../option';

import './select.css';

const Select = ({ id, details, title, alt, 
                  answers, inputMessageAdded }) => {

    const { list } = details.options;

    const selectHandler = (e) => {
        const { value } = e.target;
        inputMessageAdded(value, alt);
    }

    const getValue = () => {
        return answers[alt] ? answers[alt] : ''
    }

    return (
        <Fragment>
            <label 
                htmlFor={id}>
                {title}
            </label>
            <select 
                className="form-control form-control-lg"
                value={getValue()}
                onChange={selectHandler}
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

const mapStateToProps = ({ answers }) => {
    return {
        answers
    }
}

const mapDispatchToProps = {
    inputMessageAdded
}

export default connect(mapStateToProps, mapDispatchToProps)(Select);