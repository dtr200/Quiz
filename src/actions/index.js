const questionsRequest = () => {
    return {
        type: 'FETCH_QUESTIONS_REQUST'
    }
}

const questionsLoaded = (questions) => {
    return {
        type: 'FETCH_QUESTIONS_SUCCESS',
        payload: questions
    }
}

const questionsError = (error) => {
    return {
        type: 'FETCH_QUESTIONS_FAILURE',
        payload: error
    }
}

const inputMessageAdded = (text, alt) => {
    return {
        type: 'MESSAGE_ADDED_FROM_INPUT',
        payload: {
            text,
            alt
        }
    }
}

const fetchQuestions = (quizService, dispatch) => () => {
    quizService.getQuestions()
    .then(data => dispatch(questionsLoaded(data)))
    .catch(err => dispatch(questionsError(err)));
}

export {
    fetchQuestions,
    inputMessageAdded
}