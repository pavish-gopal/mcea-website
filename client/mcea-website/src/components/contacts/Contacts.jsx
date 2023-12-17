import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';

import {get_contacts,post_contacts} from '../../actions/contacts.js';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './contacts.css';

//bootstraps
import { Container,Row,Col,Form,FloatingLabel,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contacts() {
  const dispatch=useDispatch();
  const location=useLocation();
  const { pathname, search, hash } = location;
  let {data}=useSelector((state)=>state.contacts);
  const [edit,setEdit]=useState(false);
  const [FormData,setForm]=useState({
    staffCordinators:[], 
    studentCordinators:[],
    mail:"",
    instagramId:"",
    instagramLink:"",
} );
  // console.log(data);
  useEffect(()=>{
    dispatch(get_contacts());
    
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
      if(e.target.name==="staffCordinators"||e.target.name==="studentCordinators"){
        setForm({...FormData,[e.target.name]:e.target.value.split(",")})
      }
      else{
        setForm({...FormData,[e.target.name]:e.target.value});
      }
      
      
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(post_contacts(FormData));
    // dispatch(get_home());
    setForm({
      staffCordinators:[], 
      studentCordinators:[],
      mail:"",
      instagramId:"",
      instagramLink:"",
    }  );
    
  }
  return (
      <>
      {(!((pathname==='/signup')||(pathname==='/login')||(pathname==='/dev')))&&<Container>  
        <Row >
          {(data.length > 0)?<div className="contacts-wrapper">
              <Col md className="box1">  <div  className="staffcoordinators">Staff Coordinators</div>
                        <div>{data[0].staffCordinators.map((e)=>(<div style={{color:'#676363',fontWeight:'bold'}}>{" "+e}</div>))}</div>
                        
                        
                        
              </Col>

              <Col md style={{paddingBottom:'10px'}}>
                    <div  className='studentcoordinators'>Student Coordinators</div>
                        <div>{data[0].studentCordinators.map((e)=>(<div style={{color:'#676363',fontWeight:'bold'}}>{" "+e}</div>))}</div>
              </Col>

              <Col md style={{left:'80vw',marginTop:'10px',display:'flex',gap:'10px',flexDirection:'column'}}>
                      <div style={{display:'flex',gap:'0.6rem'}}>
                      <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 488 512" class="inline-block" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        <a style={{textDecoration:'none',color:'white'}} href={"mailto:"+data[0].mail}  rel="noopener noreferrer " target="_blank">{data[0].mail}</a></div>
                      <div style={{display:'flex',gap:'0.6rem'}}>
                      <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 448 512" class="inline-block" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                      <a style={{textDecoration:'none',color:'white'}}href={data[0].instagramLink} target="_blank">{(data[0].instagramId)}</a>
                      </div>
                      
              </Col>
            </div>:<>
            </>
         
            
          }
      </Row>
        
       
      
      {/* {input for form} */}
      {(edit)&&<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Staff Coordinators" className="mb-3">
              <Form.Control name="staffCordinators" onChange={handleChange} value={FormData.staffCordinators} placeholder="Staff Coordinators" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Student Coordinators" className="mb-3">
              <Form.Control name="studentCordinators" onChange={handleChange} value={FormData.studentCordinators} placeholder="Student Coordinators" />
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="Enter Contact Mail" className="mb-3">
              <Form.Control name="mail" onChange={handleChange} value={FormData.mail} placeholder="Enter Contact Mail" />
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="Enter Instagram Id" className="mb-3">
              <Form.Control name="instagramId" onChange={handleChange} value={FormData.instagramId} placeholder="Enter Instagram Id" />
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="Enter Instagram Link" className="mb-3">
              <Form.Control name="instagramLink" onChange={handleChange} value={FormData.instagramLink} placeholder="Enter Instagram Link" />
            </FloatingLabel>
            <Button style={{background:"#08C6CF"}} variant="dark" type="submit">Submit</Button>
            
          </Form>     

          
      </div>}
      
      </Container>}
      </>
      
    
  )
}





