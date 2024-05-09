import mongoose from "mongoose";

const linkedPlanServicesSchema = new mongoose.Schema({

    org: {
        type : String,
        require : true
    },
    object_Id: {
        type : Number,
        require : true
    },
    objectTypr: {
        type : String,
        require : true
    },
    name: {
        type : String,
        require : true
    }

});

const linkedPlanServicesModel = mongoose.model('linkedplanservices',linkedPlanServicesSchema);

export default linkedPlanServicesModel;