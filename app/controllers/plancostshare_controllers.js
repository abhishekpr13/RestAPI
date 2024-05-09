import { setResponse, setError } from './response-handler.js'; 
import { setRequest } from "./request-handler.js"; 
import * as plancostshare from '../services/plancostshare_service.js'; 
export const put = async (request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { object_Id: request.params.object_Id, ...body.plancost };
        const resp = await plancostshare.put(content);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};


export const post = async (request, response) => {
    try {
        const body = setRequest(request.body);
        const plan = body.plancost;
        const createplancostshare = await plancostshare.post(plan);
        setResponse(createplancostshare, response);
    } catch (error) {
        
        setError(error, response);
    }
};


export const get = async (request, response) => {
    try {
        const object_Id = request.params.object_Id;
        const resp = await plancostshare.get(object_Id);
        setResponse(resp, response);
    } catch (error) {
      
        setError(error, response);
    }
};

export const deleteplancost = async (request, response) => {
    try {
        const object_Id = request.params.object_Id;
        const resp = await plancostshare.deleteplancost(object_Id);
        setResponse(resp, response);
    } catch (error) {
        
        setError(error, response);
    }
};