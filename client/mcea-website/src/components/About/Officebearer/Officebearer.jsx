import React from 'react'
import './style.css';
//bootstraps
import { Container,Card,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Officebearer({data,options,Edit,Delete}) {
  return (
    <Container style={{padding:"1rem"}} className="wrapper">
    
    <Card  style={{backgroundColor:'transparent',borderColor:'#00E4FF',width:'20rem',height:'12rem',borderRadius:'1rem',display:'flex',flexDirection:'row'}}>
      <Card.Img style={{width:'50%',borderRadius:'1rem'}} src="https://photos.google.com/share/AF1QipMnzLzrhchQJAkKPnGXGMifZ19R0wixHKH7GXLlE3U534K3Jw9W3V4F2sSuWgCDQA/photo/AF1QipPWSSfA1rt1a7RGB1GVueErt53-dYokI0W7Cjzr?key=QWdvN3o4MGxmcEtKTVI3ZWdxc1hWUFpNQXVoVzBB" alt="oops someting went wrong"/>
      <Card.Body>
      {(options)&&<div> <Button style={{background:"#08C6CF"}} onClick={()=>{Edit(data?._id)}}>edit</Button> <Button style={{background:"#08C6CF"}} onClick={()=>{Delete(data?._id)}}>delete</Button></div>}
        <Card.Title style={{color:'#00E4FF'}}>{data.name}</Card.Title>
        <Card.Text style={{color:'#00E4FF'}}>{data.studyingYear}</Card.Text>
        <Card.Text style={{color:'#00E4FF'}}>Posting : {data.posting}</Card.Text>
       
      </Card.Body>
    </Card>
    {/* <div>
        {(options)&&<div> <div  onClick={()=>{Edit(data?._id)}}>edit</div> <div  onClick={()=>{Delete(data?._id)}}>delete</div></div>}
        <div>
          <img href={data.photo} alt="oops someting went wrong"></img>
          <div>{data.name}</div>
          <div>{data.posting}</div>   
          <div>{data.studyingYear}</div>
        </div>
    </div> */}
    </Container>
  )
}
