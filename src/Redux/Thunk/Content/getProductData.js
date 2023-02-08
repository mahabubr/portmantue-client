import { addContent } from "../../Action/contentAction"

const getContentData = () => {
    return async (dispatch, getState) => {
        const response = await fetch('http://localhost:5000/content')
        const data = await response.json()
        if (data.length) {
            dispatch(addContent(data))
        }
    }
}

export default getContentData