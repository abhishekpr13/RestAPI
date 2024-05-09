import linkedservices from './../models/linkedservice'

export const get = async (object_Id) => {
    const createlinkedservice = await linkedservices.find({ object_Id }).exec();
    return createlinkedservice;
}


export const post = async (linkedservice) => {
    
    const createlinkedservice = new linkedservices(linkedservice);
    return await createlinkedservice.post();
}


export const put = async (linkedservice) => {
    const createlinkedservice = await linkedservices.updateOne({ object_Id: linkedservice.object_Id }, linkedservice).exec();
    return createlinkedservice;
}


export const deletelinkedservice = async (object_Id) => {
    const createlinkedservice = await linkedservices.deletelinkedservice({ object_Id }).exec();
    return createlinkedservice;
}