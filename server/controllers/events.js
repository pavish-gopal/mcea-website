import mongoose from "mongoose";
import Events from "../model/events.js";

export const getEvents=async(req,res)=>{
    try{
        const data=await Events.find();
        res.status(200).json(data);
    }   
    catch(error){
        res.status(404).send(error.message);
    }
}

export const postEvents=async(req,res)=>{
    try{
        let data=req.body;
        let newEvent=await Events.create(data);
        await newEvent.save();
        
        res.status(201).json([newEvent]);

    }
    catch(error){
        res.status(404).send(error.message);
    }
}

export const putEvents=async(req,res)=>{
    try{
        let newData=req.body;
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        console.log(isValid);
        if(isValid===true){
            const updatedEvents=await Events.findByIdAndUpdate(_id, newData, {new: true});
            await updatedEvents.save();
            res.status(200).json([updatedEvents]);
        }
        else{
            res.status(404).json({message:"sorry select valid event to update"});
        }
         
        
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

export const deleteEvents=async(req,res)=>{
    try{
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        
        if(isValid===true){
            await Events.findByIdAndDelete(_id);
            
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