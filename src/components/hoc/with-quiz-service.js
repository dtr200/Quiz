import React from 'react';
import { QuizServiceConsumer } from '../quiz-service-context';

const withQuizService = () => (Wrapped) => {
    return (props) => {
        return (
            <QuizServiceConsumer>
                {
                    (quizService) => {
                        return (
                            <Wrapped {...props}
                                     quizService={quizService} />
                        )
                    }
                }
            </QuizServiceConsumer>
            )
    }
}

export default withQuizService;