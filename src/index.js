import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import QuizService from './services/quiz-service';
import { QuizServiceProvider } from './components/quiz-service-context';

const quizService = new QuizService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry> 
            <QuizServiceProvider value={quizService}>
                <Router>
                   <App /> 
                </Router>                
            </QuizServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);