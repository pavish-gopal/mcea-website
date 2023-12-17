import React, { useEffect,useState } from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import {get_history,post_history,update_history,delete_history} from "../../actions/history";
import Event_card from './Event_card/Event_card.jsx';
import './history.css';
//bootstraps
import { Container,Card,Row,Col,Form,FloatingLabel,Button,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function History() {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.history);
  
  const [edit,setEdit]=useState(false);
  const [editHistory,setEditHistory]=useState(false);
  const [deleteHistory,setDeleteHistory]=useState(false);
  const [Id,setId]=useState(null);
  const [FormData,setForm]=useState({
    eventName:"",
    eventImage:"",
    EventDate:"",
    Description:""

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
    dispatch(get_history());
  },[]);
  
  const handleChange=(e)=>{
    setForm({...FormData,[e.target.name]:e.target.value});
    
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(editHistory){
        dispatch(update_history(Id,FormData));
      }
      else{
      dispatch(post_history(FormData));
      }
      //clearing all like id edit state etc
      setId(null);
      setEditHistory(false);
      setDeleteHistory(false);
      setForm({
        eventName:"",
        eventImage:"",
        EventDate:"",
        Description:""});
      }
      const Edit=(id)=>{
        setId(id);
        setEditHistory(true);
        setDeleteHistory(false);
        let temp=data.filter(e=>e?._id===id);
        if(temp.length>0){
          setForm({
            eventName:temp[0]?.eventName,
            eventImage:temp[0]?.eventImage,
            EventDate:temp[0]?.EventDate,
            Description:temp[0]?.Description
        
            });
        }
        
      }
      const Delete=(id)=>{
        setId(id);
        setDeleteHistory(true);
        dispatch(delete_history(id))
        setEditHistory(false);
      }
  return (
    <Container>
      <Row><div className='head-history'>History</div></Row>
      <Row lg={3} md={2}>
        { 
          data?.map((e)=>(<Col><Event_card data={e} options={edit} Edit={Edit} Delete={Delete}></Event_card></Col>))
        }
      </Row>
      {(edit)&&<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Form onSubmit={handleSubmit}>

            <FloatingLabel controlId="floatingInput" label="Event Name" className="mb-3">
              <Form.Control name="eventName" onChange={handleChange} value={FormData.eventName} placeholder="Enter Event Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="gdrive link" className="mb-3">
              <Form.Control name="eventImage" onChange={handleChange} value={FormData.eventImage} placeholder="Enter Event Name" />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingInput" label="Event date" className="mb-3">
              <Form.Control name="EventDate" onChange={handleChange} value={FormData.EventDate} placeholder="Enter Event date" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
              <Form.Control name="Description" onChange={handleChange} value={FormData.Description} placeholder="Enter Description" />
            </FloatingLabel>
            <Button style={{background:"#08C6CF"}} type="submit">Button</Button>
            {/* <input name="eventName" onChange={handleChange} value={FormData.eventName} placeholder="Enter Event Name"></input>
            <input name="eventImage"  type="file" onChange={handleChange} value={FormData.eventImage} ></input>
            <input name="EventDate" onChange={handleChange} value={FormData.EventDate} placeholder="Enter Event date"></input>
            <input name="Description" onChange={handleChange} value={FormData.Description} placeholder="Enter Description"></input>
             */}
            {/* <button type="submit">submit</button> */}
          </Form>     
        </div>}
        
    </Container>
  )
}
