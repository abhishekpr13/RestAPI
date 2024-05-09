import mongoose from "mongoose";

const LinkedServiceSchema = new mongoose.Schema({
  
    org: {
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
    },
    name: {
        type : String,
        require : true
    }
});

const LinkedServiceModel = mongoose.model('linkedservice',LinkedServiceSchema);

export default LinkedServiceModel;