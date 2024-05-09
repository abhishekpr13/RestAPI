import planservicecostshare from './../models/planservicecostshares.js';

export const get = async (object_Id) => {
    const  createplanservicecost = await planservicecostshare.find({ object_Id }).exec();
    return createplanservicecost;
}


export const post = async (planservice) => {
    
    const createplanservicecost = new planservicecostshare(planservice);
    return await createplanservicecost.post();
}


export const put = async (planservice) => {
    const createplanservicecost = await planservicecostshare.updateOne({ object_Id: planservice.object_Id }, planservice).exec();
    return createplanservicecost;
}


export const deleteplanservices = async (object_Id) => {
    const createplanservicecost = await planservicecostshare.deleteplanservices({ object_Id }).exec();
    return createplanservicecost;
}