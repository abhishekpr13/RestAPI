import { setResponse, setError } from './response-handler.js'; 
import { setRequest } from "./request-handler.js"; 
import * as planservicecost from '../services/planservicecostshare_service.js'; 
export const put = async (request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { object_Id: request.params.object_Id, ...body.planservice };
        const resp = await planservicecost.put(content);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};


export const post = async (request, response) => {
    try {
        const body = setRequest(request.body);
        const plan = body.planservice;
        const createplanservicecost = await planservicecost.post(plan);
        setResponse(createplanservicecost, response);
    } catch (error) {
        
        setError(error, response);
    }
};


export const get = async (request, response) => {
    try {
        const object_Id = request.params.object_Id;
        const resp = await planservicecost.get(object_Id);
        setResponse(resp, response);
    } catch (error) {
      
        setError(error, response);
    }
};

export const deleteplanservices = async (request, response) => {
    try {
        const object_Id = request.params.object_Id;
        const resp = await planservicecost.deleteplanservices(object_Id);
        setResponse(resp, response);
    } catch (error) {
        
        setError(error, response);
    }
};