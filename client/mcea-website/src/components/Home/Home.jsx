import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import {get_home,post_home} from '../../actions/home.js';
import {Link} from 'react-router-dom';

export default function Home() {
  const dispatch=useDispatch();
  let {data}=useSelector((state)=>state.home);
  const [edit,setEdit]=useState(false);
  const [Form,setForm]=useState({
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
        setForm({...Form,[e.target.name]:e.target.value.split(",")})
      }
      else{
        setForm({...Form,[e.target.name]:e.target.value});
      }
      
      
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(post_home(Form));
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
    <div>
      <div>temp{(data[0]?.eventName)}</div>
      <div>
        {(data.length > 0)? 
        <>
          <div>{(data[0]?.eventName)}</div>             
          <div>{data[0]?.eventDate}</div>            
          <div>{data[0]?.lastDateToRegister}</div>
          <div>{data[0]?.cashPrize}</div>
          <div>{
            // <TypeAnimation
            //      sequence={data[0]?.slider}
            //      speed={10}

            //      repeat={Infinity}
            //      style={{ fontSize: '2em' }}
            //    />
            
             }</div>
        </>:
        <>
        
        </>}
      </div>
      {(edit)&&<div>
          <form onSubmit={handleSubmit}>
            <input name="eventName" onChange={handleChange} value={Form.eventName} placeholder="Enter Event Name"></input>
            <input name="eventDate" onChange={handleChange} value={Form.eventDate} placeholder="Enter event Date"></input>
            <input name="lastDateToRegister" onChange={handleChange} value={Form.lastDateToRegister} placeholder="Enter lastDateToRegister"></input>
            <input name="cashPrize" onChange={handleChange} value={Form.cashPrize} placeholder="Enter cashPrize"></input>
            <input name="slider" onChange={handleChange} value={Form.slider} placeholder="Enter the words to be in typing animation"></input>
            <button type="submit">submit</button>
          </form>     
      </div>}

    </div>
  )
}

