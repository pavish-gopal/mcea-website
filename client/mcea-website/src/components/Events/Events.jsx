import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { get_events,post_events,update_events,delete_events } from '../../actions/events';
import Event from './Event/Event.jsx';
import './styles.css';

//bootstraps
import { Container,Card,Row,Col,Form,FloatingLabel,Button,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Events() {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.events);
  const [edit,setEdit]=useState(false);
  const [editEvent,setEditEvent]=useState(false);
  const [deleteEvent,setDeleteEvent]=useState(false);
  const [Id,setId]=useState(null);
  const [FormData,setForm]=useState({
    eventName:"",
    eventImage:"",
    rules:[],
    specifications:[],
    StudentCoordinators:[],
    RegistrationFees:"",
    RegistrationLink:""

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
    dispatch(get_events());
  },[])

  const handleChange=(e)=>{
    if((e.target.name==="rules")||(e.target.name==="specifications")||(e.target.name==="StudentCoordinators")){
      setForm({...FormData,[e.target.name]:e.target.value.split(",")})
    }
    else{
      setForm({...FormData,[e.target.name]:e.target.value});
    }
    
    
}
const handleSubmit=(e)=>{
  e.preventDefault();
  if(editEvent){
    dispatch(update_events(Id,FormData));
  }
  else{
  dispatch(post_events(FormData));
  }
  //clearing all like id edit state etc
  setId(null);
  setEditEvent(false);
  setDeleteEvent(false);
  setForm({
    eventName:"",
    eventImage:"",
    rules:[],
    specifications:[],
    StudentCoordinators:[],
    RegistrationFees:"",
    RegistrationLink:""

    });
  
  }
  const Edit=(id)=>{
    setId(id);
    setEditEvent(true);
    setDeleteEvent(false);
    let temp=data.filter(e=>e?._id===id);
    if(temp.length>0){
      setForm({
        eventName:temp[0]?.eventName,
        eventImage:temp[0]?.eventImage,
        rules:temp[0]?.rules,
        specifications:temp[0]?.specifications,
        StudentCoordinators:temp[0]?.StudentCoordinators,
        RegistrationFees:temp[0]?.RegistrationFees,
        RegistrationLink:temp[0]?.RegistrationLink
    
        });
    }
    
  }
  const Delete=(id)=>{
    setId(id);
    setDeleteEvent(true);
    dispatch(delete_events(id))
    setEditEvent(false);
  }
  return (
    <div className="wrapper">
      <span classname="eve">Events</span>
      <Carousel>
        {
        data.map((e)=>(
          <Carousel.Item >
            <Container><Event data={e} options={edit} Edit={Edit} Delete={Delete}> </Event></Container>
          </Carousel.Item>
        
        ))
        }</Carousel>

        {(edit)&&<Container>
          <Form  onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Event Name" className="mb-3">
              <Form.Control name="eventName" onChange={handleChange} value={FormData.eventName} placeholder="Enter Event Name" />
            </FloatingLabel>
            {/* <input name="eventImage"  type="file" onChange={handleChange} value={FormData.eventImage} ></input> */}
            <FloatingLabel controlId="floatingInput" label="Enter rules" className="mb-3">
              <Form.Control name="rules" onChange={handleChange} value={FormData.rules} placeholder="Enter rules" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Specifications" className="mb-3">
              <Form.Control  name="specifications" onChange={handleChange} value={FormData.specifications} placeholder="Enter specifications"/>
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="Student Coordinators" className="mb-3">
              <Form.Control name="StudentCoordinators" onChange={handleChange} value={FormData.StudentCoordinators} placeholder="Enter StudentCoordinators" />
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="RegistrationFees" className="mb-3">
              <Form.Control name="RegistrationFees" onChange={handleChange} value={FormData.RegistrationFees} placeholder="Enter RegistrationFees" />
            </FloatingLabel><FloatingLabel controlId="floatingInput" label="RegistrationLink" className="mb-3">
              <Form.Control name="RegistrationLink" onChange={handleChange} value={FormData.RegistrationLink} placeholder="Enter RegistrationLink" />
            </FloatingLabel>
            <Button style={{background:"#08C6CF"}} type="submit">Submit</Button>
            {/* <input name="eventName" onChange={handleChange} value={FormData.eventName} placeholder="Enter Event Name"></input>
            <input name="eventImage"  type="file" onChange={handleChange} value={FormData.eventImage} ></input>
            <input name="rules" onChange={handleChange} value={FormData.rules} placeholder="Enter rules"></input>
            <input name="specifications" onChange={handleChange} value={FormData.specifications} placeholder="Enter specifications"></input>
            <input name="StudentCoordinators" onChange={handleChange} value={FormData.StudentCoordinators} placeholder="Enter StudentCoordinators"></input>
            <input name="RegistrationFees" onChange={handleChange} value={FormData.RegistrationFees} placeholder="Enter RegistrationFees"></input>
            <input name="RegistrationLink" onChange={handleChange} value={FormData.RegistrationLink} placeholder="Enter RegistrationLink"></input>
            <button type="submit">submit</button> */}
          </Form>     
        </Container>}
    </div>
  )
}
