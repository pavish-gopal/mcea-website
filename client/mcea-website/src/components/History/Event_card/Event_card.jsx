import React from 'react'

export default function Event_card({data,options,Edit,Delete}) {
  return (
    <div>
        {(options)&&<div> <div  onClick={()=>{Edit(data?._id)}}>edit</div> <div  onClick={()=>{Delete(data?._id)}}>delete</div></div>}
        <div>
          <div>{data?.eventName}</div>
          <img href={data?.eventImage} alt="oops"></img>
          <div>{data?.EventDate}</div>
        
          <div>{data?.Description}</div>
        </div>
    </div>
  )
}
