import React from 'react'

import './style.css';
//bootstraps
import { Container,Card,Row,Col,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Event({data,options,Edit,Delete}) {
  
  return (
    
    <Container lg style={{display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'5rem'}}>
        
        <div>
        {(options)&&<div style={{display:'flex',justifyContent:'center'}} className="header"> <Button style={{background:"#08C6CF"}} className="buttons" onClick={()=>{Edit(data?._id)}}>edit</Button> <Button style={{background:"#08C6CF"}} className="buttons" onClick={()=>{Delete(data?._id)}}>delete</Button></div>}
        <div style={{color:'white'}}className="event-name">{data?.eventName}</div>
        {/* <img href={data?.eventImage} alt="oops"></img> */}
        <h style={{color:'red'}}className="Titles">Rules</h>
        
        <div style={{color:'#E3FDFD'}}>{
        data?.rules?.map((e)=>(<li className="points">{e}</li>))
        }</div>
        <h style={{color:'#eb1400'}}className="Titles">Specifications</h>
        <div style={{color:'#E3FDFD'}}>{
        data?.specifications?.map((e)=>(<li className="points">{e}</li>))
        }</div>
        <h style={{color:'#eb1400'}}className="Titles">Student Coordinators</h>
        <div style={{color:'#E3FDFD'}}>{
        data?.StudentCoordinators?.map((e)=>(<li className="student-coordinators">{e}</li>))
        }</div>
        <h style={{color:'#eb1400'}}className="Titles">Registration Fees {data?.RegistrationFees}</h>
        <div style={{color:'#00E4FF'}}className="registeration-fees"><Button className="reg" href={data?.RegistrationLink} alt="something went wrong" target="_blank">click here to register</Button></div>
        
        
        </div>
    </Container>
    
  )
}

