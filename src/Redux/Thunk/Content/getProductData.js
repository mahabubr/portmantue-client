import { addContent } from "../../Action/contentAction"

const getContentData = () => {
    return async (dispatch, getState) => {
        const response = await fetch('https://portmanteau-server.vercel.app/content')
        const data = await response.json()
        if (data.length) {
            dispatch(addContent(data))
        }
    }
}

export default getContentData