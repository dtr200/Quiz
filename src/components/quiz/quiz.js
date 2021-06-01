import React, {Fragment, useEffect } from 'react';
import Input from '../input';
import Select from '../select';
import Textarea from '../textarea';
import Checkbox from '../checkbox';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withQuizService } from '../hoc';
import { fetchQuestions } from '../../actions';
import { connect } from 'react-redux';

import './quiz.css';

const QuizContainer = ({ fetchQuestions, questions, 
                loading, error, answers }) => {

    useEffect(() => {
        fetchQuestions()
    }, [])

    const sendData = (e) => {
        e.preventDefault();
        console.log(answers)
    }

    if(loading)
        return <Spinner />

    if(error)
        return <ErrorIndicator />
        
    return (
        <Fragment>
            <Quiz questions={questions}/>
            <input 
                className="quiz__submit btn btn-lg btn-success"
                type="submit"
                onClick={sendData}/>
        </Fragment>                     
    )
}

const Quiz = ({ questions }) => {

    const getRow = (id, title, details, alt) => (Wrapped) => {
        const liKey = `${id}li`;
        return (
            <li
                className='quiz__list-item'
                key={liKey}>
                <Wrapped 
                    id={id}
                    details={details}
                    title={title}
                    alt={alt} />
            </li>
        )
    }

    return (
        <ul className='quiz__list form-control-lg'>
                {
                    questions.map(({ id, title, type, details, alt }) => {
                        const getFullRow = getRow(id, title, details, alt);

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
    )
}

const mapStateToProps = ({ questions, loading, error, answers }) => {
    return {
        questions,
        loading,
        error,
        answers
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { quizService } = ownProps;
    return {
        fetchQuestions: fetchQuestions(quizService, dispatch)
    }
}

export default withQuizService()(
        connect(mapStateToProps, mapDispatchToProps)(QuizContainer)
        );