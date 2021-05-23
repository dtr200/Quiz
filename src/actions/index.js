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

export {
    questionsRequest,
    questionsLoaded,
    questionsError
}