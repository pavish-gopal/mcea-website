import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';

import {get_contacts,post_contacts} from '../../actions/contacts.js';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


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
      {(!((pathname==='/signup')||(pathname==='/login')))&&<Container>  
        <Row md >
          {(data.length > 0)?<Row style={{display:'flex',flexDirection:'row'}}>
              <Col md>  <div style={{color:'#00E4FF',fontSize:'1.2rem'}} className="staffcoordinators">Staff Coordinators</div>
                        <div>{data[0].staffCordinators.map((e)=>(<div style={{color:'white'}}>{" "+e}</div>))}</div>
                        
                        <div style={{color:'#00E4FF',fontSize:'1.2rem'}}>Student Coordinators</div>
                        <div>{data[0].studentCordinators.map((e)=>(<div style={{color:'white'}}>{" "+e}</div>))}</div>
                        
              </Col>
              <Col md>
                      <div><a style={{textDecoration:'none',color:'white'}} href={"mailto:"+data[0].mail}  rel="noopener noreferrer " target="_blank">{data[0].mail}</a></div>
                      <a style={{textDecoration:'none',color:'white'}}href={data[0].instagramLink} target="_blank">{(data[0].instagramId)}</a>
              </Col>
            </Row>:<>
            </>
         
            
          }
      </Row>
        
       
      
      {/* {input for form} */}
      {(edit)&&<div >
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





