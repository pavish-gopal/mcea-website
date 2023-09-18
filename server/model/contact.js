
import mongoose from "mongoose";

let contactSchema=mongoose.Schema({
        staffCordinators:[String], 
        studentCordinators:[String],
        mail:String,
        instagramId:String,
        instagramLink:String,
});
    
const Contact=mongoose.model('Contact',contactSchema);
export default Contact;