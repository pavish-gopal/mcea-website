import React,{useState} from 'react';
import { login } from '../../actions/user.js';
import {useDispatch} from 'react-redux';
export default function Login() {
    const dispatch=useDispatch();
    let [data,setData]=useState({username:"",password:""});
    
    const handleChange=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        dispatch(login(data.username,data.password));
        setData({username:"",password:""});
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={data.username} type="text" name="username" onChange={handleChange} placeholder="enter username"></input>
            <input value={data.password} name="password" onChange={handleChange} type="password" placeholder="enter password"></input>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}
