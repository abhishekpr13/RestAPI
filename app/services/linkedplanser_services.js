import LinkedPlanService from './../models/linkedplanservices.js';

export const get = async (object_Id) => {
    const createlinkedplanservice = await LinkedPlanService.find({ object_Id }).exec();
    return createlinkedplanservice;
}


export const post = async (linkedplan) => {
    
    const createlinkedplanservice = new LinkedPlanService(linkedplan);
    return await createlinkedplanservice.post();
}


export const put = async (linkedplan) => {
    const createlinkedplanservice = await LinkedPlanService.updateOne({ object_Id: linkedplan.object_Id }, linkedplan).exec();
    return createlinkedplanservice;
}


export const deletelinkedplan = async (object_Id) => {
    const createlinkedplanservice = await LinkedPlanService.deletelinkedplan({ object_Id }).exec();
    return createlinkedplanservice;
}