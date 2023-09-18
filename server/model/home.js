import mongoose from "mongoose";

let homeSchema=mongoose.Schema({
    eventName:String,
    eventDate:String,
    lastDateToRegister:String,
    cashPrize:String,
    slider:[String],


});

const Home=mongoose.model('Home',homeSchema);
export default Home;