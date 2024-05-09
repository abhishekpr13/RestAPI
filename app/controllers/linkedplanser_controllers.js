import { setResponse, setError } from './response-handler.js'; 
import { setRequest } from "./request-handler.js"; 
import * as linkedplanser from '../services/linkedplanser_services.js'; 
export const put = async (request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { object_Id: request.params.object_Id, ...body.linkedplan };
        const resp = await linkedplanser.put(content);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};


export const post = async (request, response) => {
    try {
        const body = setRequest(request.body);
        const plan = body.linkedplan;
        const createlinkedplanservice = await linkedplanser.post(plan);
        setResponse(createlinkedplanservice, response);
    } catch (error) {
        
        setError(error, response);
    }
};


export const get = async (request, response) => {
    try {
        const object_Id = request.params.object_Id;
        const resp = await linkedplanser.get(object_Id);
        setResponse(resp, response);
    } catch (error) {
      
        setError(error, response);
    }
};

export const deletelinkedplan = async (request, response) => {
    try {
        const object_Id = request.params.object_Id;
        const resp = await linkedplanser.deletelinkedplan(object_Id);
        setResponse(resp, response);
    } catch (error) {
        
        setError(error, response);
    }
};