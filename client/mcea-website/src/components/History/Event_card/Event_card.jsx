import React from 'react'
import './style.css';
//bootstraps
import { Container,Card,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Event_card({data,options,Edit,Delete}) {
  return (
    <Container  style={{padding:"1rem"}} className="wrapper">
      <Card style={{backgroundColor:'transparent',borderColor:'#00E4FF',height:'30rem',width:'20rem'}}>
          <Card.Img  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="oops someting went wrong"/>
        <Card.Body>
        {(options)&&<div> <Button style={{background:"#08C6CF"}} onClick={()=>{Edit(data?._id)}}>edit</Button> <Button style={{background:"#08C6CF"}} onClick={()=>{Delete(data?._id)}}>delete</Button></div>}
          <Card.Title style={{color:'#00E4FF'}}>{data?.eventName}</Card.Title>
          <Card.Text style={{color:'#A4A09F'}}>{data.studyingYear}</Card.Text>
          <Card.Text style={{color:'#A4A09F'}}>{data?.EventDate}</Card.Text>
          <Card.Text style={{color:'#A4A09F'}}>{data?.Description}</Card.Text>
       
        </Card.Body>
      </Card>

        {/* {(options)&&<div> <div  onClick={()=>{Edit(data?._id)}}>edit</div> <div  onClick={()=>{Delete(data?._id)}}>delete</div></div>}
        <div>
          <div>{data?.eventName}</div>
          <img href={data?.eventImage} alt="oops"></img>
          <div>{data?.EventDate}</div>
        
          <div>{data?.Description}</div>
        </div> */}
    </Container>
  )
}
