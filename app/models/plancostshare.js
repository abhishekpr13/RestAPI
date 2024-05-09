import mongoose from "mongoose";

const PlanCostSharesSchema = new mongoose.Schema({
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
const PlanCostSharesModel = mongoose.model('plancostshare',PlanCostSharesSchema);

export default PlanCostSharesModel;