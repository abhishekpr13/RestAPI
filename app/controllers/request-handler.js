
export const setRequest = (object) => {
    return { ...object.data };
}


export const setError = (err, response) => {
    
    response.status(500); 
    response.json({
        error: {
            code: "Internal server error",
            message: "Error occurred while processing the request"
        }
    }); 
}