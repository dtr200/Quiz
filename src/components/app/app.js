import React, {Fragment} from 'react';
import { withQuizService } from '../hoc';
import { Switch, Route } from 'react-router-dom';
import Header from '../header';
import { HomePage, StatsPage } from '../pages';
import './app.css';

const App = ({ quizService }) => {

    return (
        <Fragment>
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
        </Fragment>
    )
}

export default withQuizService()(App);