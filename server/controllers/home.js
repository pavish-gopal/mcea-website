const Home =require( '../model/home.js');
const mongoose =require('mongoose');

const getHome =async (req,res)=>{
    try{
        
        let home=await Home.find();
        
        res.status(200).send(home);
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

const postHome=async(req,res)=>{
    try{
        let data=req.body;
        let home=await Home.find();
        
        if(home.length>=1){
            await Home.deleteMany({});
            let newHome=await Home.create(data);
            await newHome.save();
        
            res.status(201).json([newHome]);
        }
        else{
            let newHome=await Home.create(data);
        await newHome.save();
        
        res.status(201).json({data:newHome,message:"created successfully"});
        }
        

    }
    catch(error){
        res.status(404).send(error.message);
    }
}

 const putHome=async(req,res)=>{
    try{
        let newData=req.body;
        
        const newHome=await Home.updateMany({},newData);
        await newHome.save();
        res.status(200).json([newHome]);
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

 const deleteHome=async(req,res)=>{
    try{
        await Home.deleteMany({});
    
        res.status(200).json({message:"deletion sucessfull"});
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

module.exports={
    getHome,
    postHome,
    putHome,
    deleteHome,
}