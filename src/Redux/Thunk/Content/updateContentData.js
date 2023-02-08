import { updateContent } from "../../Action/contentAction"

const updateContentData = (content) => {
    return async (dispatch, getState) => {
        const response = await fetch(`http://localhost:5000/content/${content._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ title: "Hello World" })
        })
        const data = await response.json()
        if (data.acknowledged) {
            dispatch(updateContent(content))
        }
    }
}

export default updateContentData