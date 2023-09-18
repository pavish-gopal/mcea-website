import mongoose from "mongoose";

let UserSchema=mongoose.Schema({
        UserName:String,
        Password:String,
});
    
const User=mongoose.model('User',UserSchema);
export default User;