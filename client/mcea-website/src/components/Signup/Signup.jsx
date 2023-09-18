import React,{useState} from 'react'

export default function Signup() {
    let [data,setData]=useState({username:"",password:""});
    
    const handleChange=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        setData();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="enter username"></input>
            <input  name="password" onChange={handleChange} type="password" placeholder="enter password"></input>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}
