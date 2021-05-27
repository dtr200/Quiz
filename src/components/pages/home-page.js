import React from 'react';
import Quiz from '../quiz';

const HomePage = () => {
    return (
        <main className="page-main">
            <h1 className="page-main__title">Анкета оценки педагогической деятельности</h1>
            <Quiz />
        </main>
    )
}

export default HomePage;