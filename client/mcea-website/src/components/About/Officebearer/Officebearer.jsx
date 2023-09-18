import React from 'react'

export default function Officebearer({data,options,Edit,Delete}) {
  return (
    <div>
        {(options)&&<div> <div  onClick={()=>{Edit(data?._id)}}>edit</div> <div  onClick={()=>{Delete(data?._id)}}>delete</div></div>}
        <div>
          <img href={data.photo} alt="oops someting went wrong"></img>
          <div>{data.name}</div>
          <div>{data.posting}</div>   
          <div>{data.studyingYear}</div>
        </div>
    </div>
  )
}
