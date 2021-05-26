import React from 'react';
import { withQuizService } from '../hoc';
import { Switch, Route } from 'react-router-dom';
import Header from '../header';
import { HomePage, StatsPage } from '../pages';
import './app.css';

const App = ({ quizService }) => {

    return (
        <>
            <Header />
            <Switch>
                <Route 
                    path='/' 
                    component={HomePage}
                    exact />
                <Route 
                    path='/stats' 
                    component={StatsPage}
                    exact />
            </Switch>
        </>
    )
}

export default withQuizService()(App);