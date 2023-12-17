const mongoose =require("mongoose");
const OfficeBearers =require("../model/officeBearers.js");

 const getOfficeBearers=async(req,res)=>{
    try{
        const data=await OfficeBearers.find();
        res.status(200).json(data);
    }   
    catch(error){
        res.status(404).send(error.message);
    }
}

 const postOfficeBearers=async(req,res)=>{
    try{
        let data=req.body;
        let newofficeBearers=await OfficeBearers.create(data);
        await newofficeBearers.save();
        
        res.status(201).json([newofficeBearers]);

    }
    catch(error){
        res.status(404).send(error.message);
    }
}

 const putOfficeBearers=async(req,res)=>{
    try{
        let newData=req.body;
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        if(isValid===true){
            const updatedlist=await OfficeBearers.findByIdAndUpdate(_id, newData, {new: true});
            await updatedlist.save();
            res.status(200).json([updatedlist]);
        }
        else{
            res.status(404).json({message:"sorry select valid event to update"});
        }
         
        
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

 const deleteOfficeBearers=async(req,res)=>{
    try{
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        console.log(isValid,_id);
        if(isValid===true){
            await OfficeBearers.findByIdAndDelete(_id);
            res.status(200).json(_id);
        }
        else{
            res.status(404).json({message:"sorry select valid event to delete"});
        }
        
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

module.exports={
    getOfficeBearers,postOfficeBearers,putOfficeBearers,deleteOfficeBearers,
}