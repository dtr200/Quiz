import React from 'react';
import QuizContext from '../quiz-service-context';

const withQuizService = () => (Wrapped) => {
    return (props) => {
        return (
            <QuizContext.Consumer>
                {
                    (quizService) => {
                        return (
                            <Wrapped {...props}
                                     quizService={quizService} />
                        )
                    }
                }
            </QuizContext.Consumer>
            )
    }
}

export default withQuizService;