import { combineReducers } from "redux"
import contentReducer from "./ContentReducer/contentReducer"

const rootReducer = combineReducers({
    content: contentReducer
})

export default rootReducer