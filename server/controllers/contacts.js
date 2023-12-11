import Contact from '../model/contact.js';
import mongoose from 'mongoose';

export const getContacts =async (req,res)=>{
    try{
        let contacts=await Contact.find(); 
        
        res.status(200).json(contacts);
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

export const postContacts=async(req,res)=>{
    try{
        let data=req.body;
        let contacts=await Contact.find();
        
        if(contacts.length>=1){
            await Contact.deleteMany({});
            let newContacts=await Contact.create(data);
            await newContacts.save();
        
            res.status(201).json([newContacts]);
        }
        else{
            let newContacts=await Contact.create([data]);
        await newContacts.save();
        
        res.status(201).json({data:newContacts,message:"created successfully"});
        }
        

    }
    catch(error){
        res.status(404).send(error.message);
    }
}

export const putContacts=async(req,res)=>{
    try{
        let newData=req.body;
        
        const newContacts=await Contact.updateMany({},newData);
        
        res.status(200).json({data:newContacts,message:"updation sucessful"});
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

export const deleteContacts=async(req,res)=>{
    try{
        await Contact.deleteMany({});
    
        res.status(200).json({message:"deletion sucessfull"});
    }
    catch(error){
        res.status(404).send(error.message);
    }
}