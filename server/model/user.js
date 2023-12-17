const mongoose =require( "mongoose");

let UserSchema=mongoose.Schema({
        UserName:String,
        Password:String,
});
    
const User=mongoose.model('User',UserSchema);
module.exports= User;