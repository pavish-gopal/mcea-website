const mongoose =require( "mongoose");

let homeSchema=mongoose.Schema({
    eventName:String,
    eventDate:String,
    lastDateToRegister:String,
    cashPrize:String,
    slider:[String],


});

const Home=mongoose.model('Home',homeSchema);
module.exports= Home;