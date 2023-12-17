const mongoose =require( "mongoose");

const eventsSchema=mongoose.Schema({
    eventName:String,
    eventImage:String,
    rules:[String],
    specifications:[String],
    StudentCoordinators:[String],
    RegistrationFees:String,
    RegistrationLink:String,

});

const Events=mongoose.model('Events',eventsSchema);
module.exports= Events;