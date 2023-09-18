import mongoose from "mongoose";
import History from "../model/history.js";

export const getHistory=async(req,res)=>{
    try{
        const data=await History.find();
        res.status(200).json(data);
    }   
    catch(error){
        res.status(404).send(error.message);
    }
}

export const postHistory=async(req,res)=>{
    try{
        let data=req.body;
        
        let newHistory=await History.create(data);
        await newHistory.save();
        
        res.status(201).json([newHistory]);

    }
    catch(error){
        res.status(404).send(error.message);
    }
}

export const putHistory=async(req,res)=>{
    try{
        let newData=req.body;
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        if(isValid===true){
            const updatedHistory=await History.findByIdAndUpdate(_id, newData, {new: true});
            await updatedHistory.save();
            res.status(200).json([updatedHistory]);
        }
        else{
            res.status(404).json({message:"sorry select valid event to update"});
        }
         
        
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

export const deleteHistory=async(req,res)=>{
    try{
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        console.log(isValid,_id);
        if(isValid===true){
            await History.findByIdAndDelete(_id);
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