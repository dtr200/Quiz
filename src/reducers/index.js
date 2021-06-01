const initialState = {
    questions: [],
    answers: {},
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'FETCH_QUESTIONS_REQUST': 
            return {                
                questions: [],
                answers: {},
                loading: true,
                error: null
            }
        case 'FETCH_QUESTIONS_SUCCESS':
            return {
                questions: action.payload,
                answers: {},
                loading: false,
                error: null
            }
        case 'FETCH_QUESTIONS_FAILURE':
            return {
                questions: [],
                answers: {},
                loading: false,
                error: action.payload
            }
        case 'MESSAGE_ADDED_FROM_INPUT':
            const { alt, text } = action.payload;
            return {
                ...state,
                answers: {
                    [alt]: text
                }
            }
        default: 
            return state;
    }
}

export default reducer;