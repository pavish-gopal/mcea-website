import React,{useState} from 'react';
import { login } from '../../actions/user.js';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';


import './login.css';
//bootstraps
import { Form,FloatingLabel,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const navigate = useNavigate();
    const dispatch=useDispatch();
    let [data,setData]=useState({username:"",password:""});
    const [showPassword, setShowPassword] = useState(false);

    
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    
    const handleChange=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(login(data.username,data.password,navigate));
        
        console.log("Login");
        setData({username:"",password:""});
    }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'10px',padding:'40px',marginBottom:'40vh'}}>
        <div className="login" style={{color:'red',fontSize:'4rem'}}>Login</div>
        <Form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
            <FloatingLabel controlId="floatingInput" label="UserName" className="mb-3">
              <Form.Control value={data.username} type="text" name="username" onChange={handleChange} placeholder="enter username" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
              <Form.Control value={data.password} name="password" onChange={handleChange} type={(showPassword)?'text':'password'} placeholder="enter password" />
              <div style={{display:'flex',justifyContent:'left',marginTop:'10px'}}><Form.Check
                    type="checkbox"
                    label="Show Password"
                    onChange={handleTogglePassword}
                    />
              </div>
            </FloatingLabel>
            
            <Button type="submit">submit</Button>
            
        </Form>
    </div>
    
  )
}
