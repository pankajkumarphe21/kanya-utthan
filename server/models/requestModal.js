import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    father : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true},
    daughter : {type : mongoose.Schema.Types.ObjectId, ref : "daughter", required : true},
    date : Date,
    venue : String,
    gallery : [
        {type : String}
    ],
    fundCollected : Number,
    agent : String,
    approval : {type : Boolean, default : false},
    fund : [{
        donor : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true},
        fundDonated : Number
    }]
})

const requestModal = mongoose.model("request", requestSchema);

export default requestModal;