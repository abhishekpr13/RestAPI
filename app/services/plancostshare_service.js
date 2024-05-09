import plancostshare from './../models/plancostshare';

export const get = async (object_Id) => {
    const createplancostshare = await plancostshare.find({ object_Id }).exec();
    return createplancostshare;
}


export const post = async (plancost) => {
    
    const createplancostshare = new plancostshare(plancost);
    return await createplancostshare.post();
}


export const put = async (plancost) => {
    const createplancostshare = await plancostshare.updateOne({ object_Id: plancost.object_Id }, plancost).exec();
    return createplancostshare;
}


export const deleteplancost = async (object_Id) => {
    const createplancostshare = await plancostshare.deleteplancost({ object_Id }).exec();
    return createplancostshare;
}