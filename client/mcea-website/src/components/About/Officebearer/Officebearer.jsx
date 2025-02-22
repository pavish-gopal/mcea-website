import React,{ useState,useEffect} from 'react';
import './style.css';
import mceaLogo from '../../../img/mceaLogo.png';
import loadingSvg from '../../assets/Gifs/loading.svg';
//bootstraps
import { Container,Card,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Officebearer({data,options,Edit,Delete}) {
    const [gdirve_key,set_gdrive_key]=useState(null);
    const [loaded,setLoaded]=useState(false);
    useEffect(()=>{
      setLoaded(true);
      setInterval(()=>{
        setLoaded(false);
        
      },5000)
    },[])
    useEffect(()=>{
      console.log(loaded);
    },[loaded])
    useEffect(()=>{
      set_gdrive_key(data.photo.split('/')[5]);
      console.log(gdirve_key)
    } )
  return (
    <Container style={{padding:"1rem"}} className="wrapper">
    
    <Card  style={{padding:'6px',backgroundColor:'rgba(177, 168, 168, 0.416)',borderColor:'white',width:'20rem',height:'13rem',borderRadius:'1rem',display:'flex',flexDirection:'row'}}>
      
      {

        (loaded==false)?<img style={{objectFit:'cover',padding:'2px',width:'50%',borderRadius:'1rem'}} src={`https://lh3.googleusercontent.com/d/${gdirve_key}`} alt="image unavailable"  />:
        <img style={{padding:'2px',width:'50%',borderRadius:'1rem'}} src={loadingSvg} alt='Oops something went wrong' /> 
      }
        
      
      <Card.Body>
      {(options)&&<div> <Button style={{background:"#08C6CF"}} onClick={()=>{Edit(data?._id)}}>edit</Button> <Button style={{background:"#08C6CF"}} onClick={()=>{Delete(data?._id)}}>delete</Button></div>}
        <Card.Title style={{color:'white',fontSize:'0.9rem',fontWeight:'bold',textAlign:'left'}}>{data.name}</Card.Title>
        <Card.Text style={{color:'rgb(211, 197, 175)',fontSize:'0.9rem',fontWeight:"bold"}}>{data.posting}</Card.Text>
        <Card.Text style={{color:'red'}}>{data.studyingYear}</Card.Text>
        
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
