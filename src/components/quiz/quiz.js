import React, {Fragment, useEffect } from 'react';
import Input from '../input';
import Select from '../select';
import Textarea from '../textarea';
import Checkbox from '../checkbox/checkbox';
import { withQuizService } from '../hoc';
import { questionsLoaded } from '../../actions';
import { connect } from 'react-redux';

import './quiz.css';

const Quiz = ({quizService, questions, questionsLoaded }) => {

    useEffect(() => {
        const data = quizService.getQuestions();
        questionsLoaded(data)
    }, [])

    const getRow = (id, title, details) => (Wrapped) => {
        const liKey = `${id}li`;
        
        return (
            <li
                className='quiz__list-item'
                key={liKey}>
                <Wrapped 
                    id={id}
                    details={details}
                    title={title} />
            </li>
        )
    }

    return (
        <Fragment>
            <ul className='quiz__list form-control-lg'>
                {
                    questions.map(({id, title, type, details}) => {
                        const getFullRow = getRow(id, title, details);

                        switch (type){
                            case 'input': 
                                return getFullRow(Input);
                            case 'select':
                                return getFullRow(Select);
                            case 'checkbox':
                                return getFullRow(Checkbox);
                            case 'textarea':
                                return getFullRow(Textarea);
                            default:
                                return null
                        } 
                    })
                }
            </ul>
            <input 
                className="quiz__submit btn btn-lg btn-success"
                type="submit"/>

        </Fragment>                     
    )
}

const mapStateToProps = ({ questions }) => {
    return {
        questions
    }
}

const mapDispatchToProps = {
    questionsLoaded
}

export default withQuizService()(
        connect(mapStateToProps, mapDispatchToProps)(Quiz)
        );