const initialState = {
    questions: [],
    answers: [], // ответы
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'FETCH_QUESTIONS_REQUST': 
            return {
                questions: [],
                loading: true,
                error: null
            }
        case 'FETCH_QUESTIONS_SUCCESS':
            return {
                questions: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_QUESTIONS_FAILURE':
            return {
                questions: [],
                loading: false,
                error: true
            }
        default: 
            return state;
    }
}

export default reducer;