import React from 'react';

const { 
    Provider: QuizServiceProvider, 
    Consumer: QuizServiceConsumer 
} = React.createContext();

export {
    QuizServiceProvider,
    QuizServiceConsumer
}