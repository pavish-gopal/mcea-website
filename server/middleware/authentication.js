const jwt =require('jsonwebtoken');
const privateKey="mcea_website"
 function authentication(req,res,next){
    try{
        
        let token=req?.headers?.authorization?.split(" ")[1];
        const decoded=jwt.verify(token,privateKey);
        console.log(decoded);
        next();
    }
    catch(error){
      console.log(error.message);  
    }
}
module.exports={
  authentication,
}