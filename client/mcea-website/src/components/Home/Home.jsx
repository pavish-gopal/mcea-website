import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import {get_home,post_home} from '../../actions/home.js';
import { Link } from 'react-router-dom';
//gifs importing
import gif0 from '../assets/Gifs/isometric-automatic-production-of-products.gif';
import gif1 from '../assets/Gifs/taxi-53.gif';
import gif2 from '../assets/Gifs/handy-machine-learning.gif';
import gif3 from '../assets/Gifs/kingdom-business-chart-overlook.gif';
import gif4 from '../assets/Gifs/gif4.gif';
//css importing
import './Home.css';

//bootstraps
import { Container,Card,Row,Col,Form,FloatingLabel,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const dispatch=useDispatch();
  let {data}=useSelector((state)=>state.home);
  const [edit,setEdit]=useState(false);
  const [FormData,setForm]=useState({
    eventName:"",
    eventDate:"",
    lastDateToRegister:"",
    cashPrize:"",
    slider:[]
  } );
  // console.log(data);
  useEffect(()=>{
    dispatch(get_home());
    
  },[])
  useEffect(()=>{
    if(localStorage.getItem('profile')){
      setEdit(true);
    }
    else{
      setEdit(false);
    }
  },[localStorage.getItem('profile')]);
  const handleChange=(e)=>{
      if(e.target.name==="slider"){
        setForm({...FormData,[e.target.name]:e.target.value.split(",")})
      }
      else{
        setForm({...FormData,[e.target.name]:e.target.value});
      }
      
      
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(post_home(FormData));
    // dispatch(get_home());
    setForm({
      eventName:"",
      eventDate:"",
      lastDateToRegister:"",
      cashPrize:"",
      slider:[]
    } );
    
  }
  return (
      
      <Container>
      <Row style={{marginTop:'6%'}}>
        <Col style={{display:'flex',flexDirection:'center',alignItems:'center'}} md>
          <img style={{width:'90%'}} src={gif0}></img>
        </Col>
        <Col md><div>
        {(data.length > 0)? 
        <Container>
          <div style={{color:'#FF0101'}} className="Home-college-name">KONGU ENGINEERING COLLEGE</div>
          <div  className="Home-eventName">{(data[0]?.eventName)}</div>  
          <div className="Home-slider">{
            (data[0].slider.length===1)?<div style={{ fontSize: '1rem',color:'red',fontWeight:'bold'}}>
            {data[0].slider}
            
            
          </div>:<TypeAnimation
            sequence={data[0]?.slider}
            speed={9}

            repeat={Infinity}
            style={{ fontSize: '1rem',color:'red',fontWeight:'bold'}}
          />
               
            
             }</div>          
          <div  className="Home-eventDate">{data[0]?.eventDate}</div>            
          
          <div  className="Home-cashPrice">Cash prize upto {data[0]?.cashPrize}</div>

             <div className="home-button-wrapper" style={{marginTop:'5%'}}><Link className="reg" to="/events">Register Soon</Link></div>
             <div  className="Home-lastDateToRegister">Last date to Register {data[0]?.lastDateToRegister}</div>
        </Container>:
        <>
        
        </>}
      </div></Col>
      </Row>
      
      {/* {input for form} */}
      {(edit)&&<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Form  onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Event Name" className="mb-3">
              <Form.Control name="eventName" onChange={handleChange} value={FormData.eventName} placeholder="Enter Event Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Event Date" className="mb-3">
              <Form.Control name="eventDate" onChange={handleChange} value={FormData.eventDate} placeholder="Enter event Date" />
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="Last Date To Register" className="mb-3">
              <Form.Control name="lastDateToRegister" onChange={handleChange} value={FormData.lastDateToRegister} placeholder="Enter lastDateToRegister" />
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="Cash Prize" className="mb-3">
              <Form.Control name="cashPrize" onChange={handleChange} value={FormData.cashPrize} placeholder="Enter cashPrize" />
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="slider typing" className="mb-3">
              <Form.Control name="slider" onChange={handleChange} value={FormData.slider} placeholder="Enter the words to be in typing animation" />
            </FloatingLabel>
            <Button style={{background:"#08C6CF"}} variant="dark" type="submit">Submit</Button>
            
          </Form>     

          
      </div>}
      <div className="lower-part">
          <Row style={{marginTop:'6%'}}>
              <Col style={{padding:"2rem",display:'flex',justifyContent:'center',alignItems:'center'}} md classname="about-left"><img style={{width:'15rem'}} src={gif1}></img></Col>
              <Col style={{padding:"2rem"}} md className="about-right">
                <div className="titles" >Proudly presented by</div>
                <div className="description1">MECHATRONICS ENGINEERING ASSOCIATION</div>
                <div className="description">"FOR THE STUDENTS BY THE STUDENTS"</div>
              </Col>
              
          </Row>

          <Row style={{marginTop:'4%'}}>
              <Col style={{padding:"2rem",display:'flex',justifyContent:'center',alignItems:'center'}} md classname="objectives-left"><img src={gif2} style={{width:'15rem'}}></img></Col>
              <Col style={{padding:"2rem"}}  md className="objectives-right">
                <div className="titles">OBJECTIVES</div>
                <div className="description">Our association seeks to create a vibrant community where members can 
                explore their passion for engineering through hands-on projects, workshops, and networking events. 
                By fostering a collaborative and inclusive environment, we aim to inspire creativity, promote learning, 
                and prepare members for success in their academic and professional pursuits.</div>
                
              </Col>
              
          </Row>

          <div><Row className="mission-left">
              <Col style={{padding:"2rem"}} md >
                <div className="titles">MISSION</div>
                <div className="description">Committed to providing our members all the resources and chances necessary to succeed
                 professionally and position them for roles of leadership in the field of engineering.
                </div>
              </Col>
              <Col style={{padding:"2rem",display:'flex',justifyContent:'center',alignItems:'center'}} md className="mission-right">
                <img style={{width:'15rem'}} src={gif3}></img>
                
              </Col>
              
              
          </Row></div>

          <Row style={{marginTop:'4%'}}>
              <Col style={{padding:"2rem",display:'flex',justifyContent:'center',alignItems:'center'}} md classname="vision-left"><img style={{width:'15rem'}} src={gif4}></img></Col>
              <Col style={{padding:"2rem"}} md className="vision-right">
                <div className="titles">VISION</div>
                <div className="description">Promoting a diverse and inclusive culture that feel empowered to 
                express themselves , thus ensuring a wide variety of perspectives within the engineering community.
              </div>
                
              </Col>
              
          </Row>
          
      </div>
      </Container>
    
  )
}

