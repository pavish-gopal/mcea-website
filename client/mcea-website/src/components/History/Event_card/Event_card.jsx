import React,{useState,useEffect} from 'react'
import './style.css';
//bootstraps
import { Container,Card,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Event_card({data,options,Edit,Delete}) {
  const [gdirve_key,set_gdrive_key]=useState(null);
    useEffect(()=>{
      if(data.eventImage){
      set_gdrive_key(data.eventImage.split('/')[5]);
      }
    } )
  return (
    <Container  style={{padding:"1rem"}} className="wrapper">
      <Card style={{backgroundColor:'rgba(177, 168, 168, 0.416)',borderColor:'white',height:'32rem',width:'20rem'}}>
          <img  src={`https://drive.google.com/uc?export=view&id=${gdirve_key}`} alt="oops someting went wrong" loading="lazy" />
        <Card.Body>
        {(options)&&<div> <Button style={{background:"#08C6CF"}} onClick={()=>{Edit(data?._id)}}>edit</Button> <Button style={{background:"#08C6CF"}} onClick={()=>{Delete(data?._id)}}>delete</Button></div>}
          <Card.Title style={{color:'white',fontSize:'1.7rem'}}>{data?.eventName}</Card.Title>
          <Card.Text style={{color:'rgb(211, 197, 175)',fontWeight:"bold"}}>{data.studyingYear}</Card.Text>
          <Card.Text style={{color:'#A4A09F'}}>{data?.EventDate}</Card.Text>
          <Card.Text style={{color:'rgb(211, 197, 175)',fontWeight:"bold"}}>{data?.Description}</Card.Text>
       
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
