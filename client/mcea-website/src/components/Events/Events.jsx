import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { get_events,post_events,update_events,delete_events } from '../../actions/events';
import Event from './Event/Event.jsx';

export default function Events() {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.events);
  const [edit,setEdit]=useState(false);
  const [editEvent,setEditEvent]=useState(false);
  const [deleteEvent,setDeleteEvent]=useState(false);
  const [Id,setId]=useState(null);
  const [Form,setForm]=useState({
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
      setForm({...Form,[e.target.name]:e.target.value.split(",")})
    }
    else{
      setForm({...Form,[e.target.name]:e.target.value});
    }
    
    
}
const handleSubmit=(e)=>{
  e.preventDefault();
  if(editEvent){
    dispatch(update_events(Id,Form));
  }
  else{
  dispatch(post_events(Form));
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
    <div>
      
      <div>{
        data.map((e)=>(
          <Event data={e} options={edit} Edit={Edit} Delete={Delete}> 

          </Event>
        
        ))
        }</div>

        {(edit)&&<div>
          <form onSubmit={handleSubmit}>
            <input name="eventName" onChange={handleChange} value={Form.eventName} placeholder="Enter Event Name"></input>
            <input name="eventImage"  type="file" onChange={handleChange} value={Form.eventImage} ></input>
            <input name="rules" onChange={handleChange} value={Form.rules} placeholder="Enter rules"></input>
            <input name="specifications" onChange={handleChange} value={Form.specifications} placeholder="Enter specifications"></input>
            <input name="StudentCoordinators" onChange={handleChange} value={Form.StudentCoordinators} placeholder="Enter StudentCoordinators"></input>
            <input name="RegistrationFees" onChange={handleChange} value={Form.RegistrationFees} placeholder="Enter RegistrationFees"></input>
            <input name="RegistrationLink" onChange={handleChange} value={Form.RegistrationLink} placeholder="Enter RegistrationLink"></input>
            <button type="submit">submit</button>
          </form>     
        </div>}
    </div>
  )
}
