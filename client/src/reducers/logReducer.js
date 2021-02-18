import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR, 
    ADD_LOG, 
    DELETE_LOG,
    CLEAR_CURRENT,
    SET_CURRENT,
    SEARCH_LOGS,
    UPDATE_LOG,
    CLEAR_LOGS
} from '../actions/types'
const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null,
    filtered: null
};

const logReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log._id === action.payload._id ? action.payload : log),
                loading: false
            }
        case SEARCH_LOGS:
            return {
                ...state,
                filtered: state.logs.filter(log => {
                    const regex = new RegExp(`${action.payload}`,'gi');
                    return log.message.match(regex) || log.tech.match(regex);
                })
            }
        case CLEAR_LOGS:
            return {
                ...state,
                filtered: null
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log._id !== action.payload),
                loading: false
            } 
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case LOGS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default logReducer;