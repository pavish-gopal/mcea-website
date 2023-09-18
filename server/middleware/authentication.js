import jwt from 'jsonwebtoken';
const privateKey="mcea_website"
export function authentication(req,res,next){
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