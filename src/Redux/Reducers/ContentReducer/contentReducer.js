import { ADD_CONTENT, DELETE_CONTENT, HISTORY_CONTENT, UPDATE_CONTENT } from "../../ActionTypes/actionTypes"

const initialState = {
    content: [],
    history: []
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTENT:
            return {
                ...state,
                content: action.payload
            }
        case DELETE_CONTENT:
            return {
                ...state,
                content: state.content.filter(con => con._id !== action.payload)
            }
        case UPDATE_CONTENT:
            return {
                ...state,
                content: state.content.filter(cn => cn._id !== action.payload._id)
            }
        case HISTORY_CONTENT:
            return {
                ...state,
                history: action.content
            }
        default:
            return state
    }
}

export default contentReducer