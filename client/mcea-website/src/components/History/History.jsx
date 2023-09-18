import React, { useEffect,useState } from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import {get_history,post_history,update_history,delete_history} from "../../actions/history";
import Event_card from './Event_card/Event_card.jsx';

export default function History() {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.history);
  
  const [edit,setEdit]=useState(false);
  const [editHistory,setEditHistory]=useState(false);
  const [deleteHistory,setDeleteHistory]=useState(false);
  const [Id,setId]=useState(null);
  const [Form,setForm]=useState({
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
    setForm({...Form,[e.target.name]:e.target.value});
    
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(editHistory){
        dispatch(update_history(Id,Form));
      }
      else{
      dispatch(post_history(Form));
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
    <div>
      
      <div>
        { 
          data?.map((e)=>(<Event_card data={e} options={edit} Edit={Edit} Delete={Delete}></Event_card>))
        }
      </div>
      {(edit)&&<div>
          <form onSubmit={handleSubmit}>
            <input name="eventName" onChange={handleChange} value={Form.eventName} placeholder="Enter Event Name"></input>
            <input name="eventImage"  type="file" onChange={handleChange} value={Form.eventImage} ></input>
            <input name="EventDate" onChange={handleChange} value={Form.EventDate} placeholder="Enter Event date"></input>
            <input name="Description" onChange={handleChange} value={Form.Description} placeholder="Enter Description"></input>
            
            <button type="submit">submit</button>
          </form>     
        </div>}
        
    </div>
  )
}
