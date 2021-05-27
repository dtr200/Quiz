import React from 'react';
import Input from '../input';
import Select from '../select';
import Textarea from '../textarea';
import QuizService from '../../services/quiz-service';

import './quiz.css';

const quizService = new QuizService();

const Quiz = () => {

    const questions = quizService.getQuestions();

    const getRow = (id, title, details) => (Wrapped) => {
        const liKey = `${id}li`;
        
        return (
            <li key={liKey}>
                <Wrapped 
                    id={id}
                    details={details}
                    title={title} />
            </li>
        )
    }

    return (
        <ul>
            {
                questions.map(({id, title, type, details}) => {
                    const getFullRow = getRow(id, title, details);

                    switch (type){
                        case 'input': 
                            return getFullRow(Input);
                        case 'select':
                            return getFullRow(Select);
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

export default Quiz;