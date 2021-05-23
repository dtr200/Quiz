import React from 'react';
import { withQuizService } from '../hoc';
import './app.css';

const App = ({ quizService }) => {

    console.log(quizService.getQuestions())

    return (
        <h1>Quiz</h1>
    )
}

export default withQuizService()(App);