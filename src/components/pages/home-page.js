import React from 'react';
import Quiz from '../quiz';

import './home-page.css';
import './page-main.css';

const HomePage = () => {
    return (
        <main className="page-main">
            <h1 className="page-main__title display-2">Анкета оценки педагогической деятельности</h1>
            <form className="page-main__form">
               <Quiz /> 
            </form>            
        </main>
    )
}

export default HomePage;