const mongoose =require( "mongoose");

let officeBearersSchema=mongoose.Schema({
    name:String,
    photo:String,
    posting:String,
    studyingYear:String,

});

const OfficeBearers=mongoose.model('OfficeBearers',officeBearersSchema);
module.exports= OfficeBearers;