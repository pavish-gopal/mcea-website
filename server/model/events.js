import mongoose from "mongoose";

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
export default Events;