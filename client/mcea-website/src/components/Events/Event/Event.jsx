import React from 'react'


export default function Event({data,options,Edit,Delete}) {
  
  
  return (
    <div>
        {(options)&&<div> <div  onClick={()=>{Edit(data?._id)}}>edit</div> <div  onClick={()=>{Delete(data?._id)}}>delete</div></div>}
        <div>
        <div>{data?.eventName}</div>
        <img href={data?.eventImage} alt="oops"></img>
        
        <div>{
        data?.rules?.map((e)=>(<div>{e}</div>))
        }</div>

        <div>{
        data?.specifications?.map((e)=>(<div>{e}</div>))
        }</div>

        <div>{
        data?.StudentCoordinators?.map((e)=>(<div>{e}</div>))
        }</div>

        <div>{data?.RegistrationFees}</div>
        <a href={data?.RegistrationLink} alt="something went wrong" target="_blank">click here to register</a>
        </div>
    </div>
  )
}

