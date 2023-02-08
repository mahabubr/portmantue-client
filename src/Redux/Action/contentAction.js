import { ADD_CONTENT, DELETE_CONTENT, HISTORY_CONTENT, UPDATE_CONTENT } from "../ActionTypes/actionTypes"

export const addContent = (content) => {
    return {
        type: ADD_CONTENT,
        payload: content
    }
}
export const deleteContent = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}
export const updateContent = (content) => {
    return {
        type: UPDATE_CONTENT,
        payload: content
    }
}
export const historyContent = (history) => {
    return {
        type: HISTORY_CONTENT,
        payload: history
    }
}