import mongoose from "mongoose";

const PlanServicesCostShareSchema = new mongoose.Schema({
    deductible: {
        type : Number,
        require : true
    },
    org: {
        type : String,
        require : true
    },
    copay: {
        type : String,
        require : true
    },
    objectId: {
        type : Number,
        require : true
    },
    objectTypr: {
        type : String,
        require : true
    }

});

const planServicesCostShareModel = mongoose.model('planservicecostshare',PlanServicesCostShareSchema);

export default planServicesCostShareModel;