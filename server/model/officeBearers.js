import mongoose from "mongoose";

let officeBearersSchema=mongoose.Schema({
    name:String,
    photo:String,
    posting:String,
    studyingYear:String,

});

const OfficeBearers=mongoose.model('OfficeBearers',officeBearersSchema);
export default OfficeBearers;