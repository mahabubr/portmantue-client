const addContentData = (content) => {
    return async (dispatch, getState) => {
        const response = await fetch('http://localhost:5000/content', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        const data = await response.json()
        if (data.acknowledged) {
            // dispatch(addContent({
            //     _id: data.insertedId,
            //     ...content
            // }))
            alert('Your Product Successfully Added')
        }
    }
}

export default addContentData