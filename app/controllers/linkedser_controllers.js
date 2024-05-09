import { setResponse, setError } from './response-handler.js'; 
import { setRequest } from "./request-handler.js"; 
import * as linkedser from '../services/linkedser_services.js'; 
export const put = async (request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { object_Id: request.params.object_Id, ...body.linkedservice };
        const resp = await linkedser.put(content);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};


export const post = async (request, response) => {
    try {
        const body = setRequest(request.body);
        const plan = body.linkedservice;
        const createlinkedservice = await linkedser.post(plan);
        setResponse(createlinkedservice, response);
    } catch (error) {
        
        setError(error, response);
    }
};


export const get = async (request, response) => {
    try {
        const object_Id = request.params.object_Id;
        const resp = await linkedser.get(object_Id);
        setResponse(resp, response);
    } catch (error) {
      
        setError(error, response);
    }
};

export const deletelinkedservice = async (request, response) => {
    try {
        const object_Id = request.params.object_Id;
        const resp = await linkedser.deletelinkedservice(object_Id);
        setResponse(resp, response);
    } catch (error) {
        
        setError(error, response);
    }
};