import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import {get_home,post_home} from '../../actions/home.js';
import { Link } from 'react-router-dom';
import gif2 from '../../img/gif2.gif';
// import Robot1 from '../robotcomponents/Robot1/Robot1.jsx';
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
      <Row >
        <Col md>
          <div>left</div>
        </Col>
        <Col md><div>
        {(data.length > 0)? 
        <Container>
          <div style={{color:'#00E4FF'}} className="Home-college-name">Kongu Engineering College</div>
          <div  className="Home-eventName">{(data[0]?.eventName)}</div>  
          <div>{
            <TypeAnimation
                 sequence={data[0]?.slider}
                 speed={10}

                 repeat={Infinity}
                 style={{ fontSize: '2rem',color:'#E3FDFD'}}
               />
            
             }</div>          
          <div style={{color:'#E3FDFD',fontSize:'1.2rem',marginTop:'2%'}} className="Home-eventDate">Event Date {data[0]?.eventDate}</div>            
          
          <div style={{color:'#E3FDFD',fontSize:'1.2rem',marginTop:'2%'}} className="Home-cashPrice">Cash prize upto {data[0]?.cashPrize}</div>

             <div style={{marginTop:'5%'}}><Link className="reg" to="/events">Register Soon</Link></div>
             <div style={{color:'#E3FDFD',fontSize:'1.2rem',marginTop:'5%'}} className="Home-lastDateToRegister">Last date to Register {data[0]?.lastDateToRegister}</div>
        </Container>:
        <>
        
        </>}
      </div></Col>
      </Row>
      
      {/* {input for form} */}
      {(edit)&&<div >
          <Form onSubmit={handleSubmit}>
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
          <Row style={{marginTop:'4%'}}>
              <Col style={{padding:"2rem"}} md classname="about-left"><img src={gif2}></img></Col>
              <Col style={{padding:"2rem"}} md className="about-right">
                <div className="titles" >Proudly presented by</div>
                <div className="description">MECHATRONICS ENGINEERING ASSOCIATION</div>
                <div className="description">"FOR THE STUDENTS BY THE STUDENTS"</div>
              </Col>
              
          </Row>

          <Row style={{marginTop:'4%'}}>
              <Col style={{padding:"2rem"}} md classname="objectives-left">left</Col>
              <Col style={{padding:"2rem"}}  md className="objectives-right">
                <div className="titles">OBJECTIVES</div>
                <div className="description">“To transform our culture by creating a world where 
                  science and technology are celebrated and where young people dream of becoming science and
                   technology leaders”</div>
                
              </Col>
              
          </Row>

          <Row style={{marginTop:'4%'}}>
              <Col style={{padding:"2rem"}} md classname="mission-left">
                <div className="titles">MISSION</div>
                <div className="description">Our mission is to inspire young people to be science and technology leaders, 
                  by engaging them in exciting mentor-based programs that build science, engineering and technology skills, 
                  that inspire innovation, and that foster 
                  well-rounded life capabilities including self-confidence, communication, and leadership.</div>
              </Col>
              <Col style={{padding:"2rem"}} md className="mission-right">
                right
                
              </Col>
              
          </Row>

          <Row style={{marginTop:'4%'}}>
              <Col style={{padding:"2rem"}} md classname="vision-left">left</Col>
              <Col style={{padding:"2rem"}} md className="vision-right">
                <div className="titles">VISION</div>
                <div className="description">To become the greatest Robotics team in the South Zone and an annual 
                  competitor at the international level Robotics Competitions. Exemplifying the 
                  importance of service through continual expansion in focus and scale of community 
                  service projects within India. Acknowledging and addressing contemporary environmental issues
                   through the adoption and innovation of new forms of clean building measures.</div>
                
              </Col>
              
          </Row>
          
      </div>
      </Container>
    
  )
}

