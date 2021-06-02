import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import QuizService from './services/quiz-service';
import QuizContext from './components/quiz-service-context';
import MockDataServer from './mock-data';
import DataServerContext from './components/data-server-context';

const quizService = new QuizService();
const mockDataServer = new MockDataServer();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <DataServerContext.Provider value={mockDataServer}>
                <QuizContext.Provider value={quizService}>
                    <Router>
                    <App /> 
                    </Router>                
                </QuizContext.Provider>
            </DataServerContext.Provider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);