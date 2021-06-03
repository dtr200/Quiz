import React, {Fragment, useEffect, useState } from 'react';
import Input from '../input';
import Select from '../select';
import Textarea from '../textarea';
import Checkbox from '../checkbox';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import Alert from '../alert';
import { withQuizService, withDataServer } from '../hoc';
import { fetchQuestions } from '../../actions';
import { connect } from 'react-redux';

import './quiz.css';

const QuizContainer = ({ fetchQuestions, questions, loading,
                         error, answers, dataServer }) => {

    useEffect(() => {
        fetchQuestions();
    }, [])

    const initialState = {
        show: false,
        isAdded: false,
        message: null
    }

    const [ alertData, setAlertData ] = useState(initialState);

    const sendData = (e) => {
        e.preventDefault();
        const result = answers;
        let data = null;
        dataServer.setNewCompany(result)
            .then(res => {
                data = {
                    show: true,
                    isAdded: true,
                    message: 'Организация успешно добавлена'
                }
                console.log(res)
            })
            .catch(err => {
                console.log('catch')
                data = {
                    show: true,
                    isAdded: false,
                    message: err.message
                }               
            })
            .finally(() => {
                setAlertData(data);
            });
    }

    const closeAlert = () => {
        console.log('close')
        setAlertData(initialState)
    }

    console.log('rerender')

    if(loading)
        return <Spinner />

    if(error)
        return <ErrorIndicator />
        
    return (
        <Fragment>
            <Alert data={alertData}
                   closeAlert={closeAlert}/>
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

export default withDataServer()(
        withQuizService()(
        connect(mapStateToProps, mapDispatchToProps)(QuizContainer)
        ));