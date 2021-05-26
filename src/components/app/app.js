import React from 'react';
import { withQuizService } from '../hoc';
import Header from '../header';
import './app.css';

const App = ({ quizService }) => {

    return (
        <Header />
    )
}

export default withQuizService()(App);