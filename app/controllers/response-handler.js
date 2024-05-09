export const setResponse = (object, response) => {
    response.status(200).json(object); 
}

const sendErrorResponse = (statusCode, errorDetails, response) => {
    response.status(statusCode).json(errorDetails); 
}

export const setError = (err, response) => {
   
    const errorDetails = {
        error: {
            code: "Internal server error",
            message: "Error occurred while processing the request"
        }
    };
    sendErrorResponse(500, errorDetails, response); 
}

export const setBadRequest = (errorDetails, response) => {
    sendErrorResponse(400, errorDetails, response);
}

export const setAccepted = (data, response) => {
    response.status(202).json(data); 
}

export const setCreated = (data, response) => {
    response.status(201).json(data); 
}
