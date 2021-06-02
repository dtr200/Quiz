const initialState = {
    questions: [],
    answers: {},
    stats: {},
    loading: true,
    error: null
}

const updateCheckbox = (state, payload) => {

    const removeId = (list, id) => {
        const index = list.findIndex(item => item === id);
        return [
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]
    }

    const checkId = (idList, id) => {
        return idList.includes(id) ? removeId(idList, id) : 
                                    [...idList, id];
    }
    
    const { checked, alt, file } = payload;
    const idList = state.answers[alt] ? state.answers[alt].idList : [];

    return {
        ...state,
        answers: {
            ...state.answers,
            [alt]: {
                ...state.answers[alt],
                idList: checkId(idList, checked)
            }
        }
    }
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
                    ...state.answers,
                    [alt]: text
                }
            }
        case 'DATA_RECEIVED_FROM_CHECKBOX':
            return updateCheckbox(state, action.payload);
        default: 
            return state;
    }
}

export default reducer;