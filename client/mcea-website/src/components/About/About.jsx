import React,{useEffect,useState} from 'react'
import Officebearer from './Officebearer/Officebearer.jsx';
import { useSelector,useDispatch } from 'react-redux';
import {get_about,post_about,update_about,delete_about} from '../../actions/about.js';
import './styles.css';
//bootstraps
import { Container,Card,Row,Col,Form,FloatingLabel,Button,} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.about);
  
  const [edit,setEdit]=useState(false);
  const [editAbout,setEditAbout]=useState(false);
  const [deleteAbout,setDeleteAbout]=useState(false);
  const [Id,setId]=useState(null);
  const [FormData,setForm]=useState({
    name:"",
    photo:"",
    posting:"",
    studyingYear:""

} );

useEffect(()=>{
  if(localStorage.getItem('profile')){
    setEdit(true);
  }
  else{
    setEdit(false);
  }
  },[localStorage.getItem('profile')]);

  useEffect(()=>{
    dispatch(get_about());
  },[])

  const handleChange=(e)=>{
    setForm({...FormData,[e.target.name]:e.target.value});
    
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(editAbout){
        dispatch(update_about(Id,FormData));
      }
      else{
      dispatch(post_about(FormData));
      }
      //clearing all like id edit state etc
      setId(null);
      setEditAbout(false);
      setDeleteAbout(false);
      setForm({
        name:"",
        photo:"",
        posting:"",
        studyingYear:""
    
    } );
      }
      const Edit=(id)=>{
        setId(id);
        setEditAbout(true);
        setDeleteAbout(false);
        let temp=data.filter(e=>e?._id===id);
        if(temp.length>0){
          setForm({
            name:temp[0]?.name,
            photo:temp[0]?.photo,
            posting:temp[0]?.posting,
            studyingYear:temp[0]?.studyingYear
        
        });
        }
        
      }
      const Delete=(id)=>{
        setId(id);
        setDeleteAbout(true);
        dispatch(delete_about(id))
        setEditAbout(false);
      }
  return (
    <Container >
      <Row><div className='head'>About</div></Row>
      <Row><div className='abt-description'>
      Our Association typically serves as a student organization affiliated with a Mechatronics  department. 
      Its purpose is to encourage a sense of community among students, provide academic support, 
      and organize events related to the department's field of study. These association often facilitate opportunities 
      and enhance the overall educational experience for students within the department.
        </div></Row>
      <Row><div className="officebearers">Officebearers</div></Row>
      <Row lg={3} md={2} >
        {
          data.map((e)=><Col><Officebearer data={e} options={edit} Edit={Edit} Delete={Delete}></Officebearer></Col>)
        } 
      </Row>
      {(edit)&&<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
              <Form.Control name="name" onChange={handleChange} value={FormData.name} placeholder="Name" />
            </FloatingLabel >

            <FloatingLabel controlId="floatingInput" label="gdrive Link" className="mb-3">
            <Form.Control name="photo" onChange={handleChange} value={FormData.photo} placeholder="Enter the link" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Posting" className="mb-3">
              <Form.Control name="posting" onChange={handleChange} value={FormData.posting} placeholder="Enter posting" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Studying Year" className="mb-3">
              <Form.Control name="studyingYear" onChange={handleChange} value={FormData.studyingYear} placeholder="Enter Studying year" />
            </FloatingLabel>
            <Button style={{background:"#08C6CF"}} type="submit">Submit</Button>
            {/* <input name="name" onChange={handleChange} value={FormData.name} placeholder="Enter Name"></input>
            <input name="photo"  type="file" onChange={handleChange} value={FormData.photo} ></input>
            <input name="posting" onChange={handleChange} value={FormData.posting} placeholder="Enter posting"></input>
            <input name="studyingYear" onChange={handleChange} value={FormData.studyingYear} placeholder="Enter Studying year"></input>
            
            <button type="submit">submit</button> */}
          </Form>     
        </div>}
    </Container>
  )
}
