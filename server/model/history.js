const mongoose =require( "mongoose");

const historySchema=mongoose.Schema({
    eventName:String,
    eventImage:String,
    EventDate:String,
    Description:String,

});

const History=mongoose.model('History',historySchema);
module.exports= History;