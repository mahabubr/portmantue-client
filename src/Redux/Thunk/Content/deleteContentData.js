import { deleteContent } from "../../Action/contentAction"

const deleteContentData = (id) => {
    return async (dispatch, getStatic) => {
        const response = await fetch(`https://portmanteau-server.vercel.app/content/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        if (data.deletedCount > 0) {
            alert('Content Deleted')
            dispatch(deleteContent(id))
        }
    }
}

export default deleteContentData