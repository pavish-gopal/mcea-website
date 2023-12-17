import React,{useState} from 'react'
import { signup } from '../../actions/user.js';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './signup.css';
//bootstraps
import { Container,Row,Col,Form,FloatingLabel,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Signup() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    let [data,setData]=useState({UserName:"",Password:""});
    
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(signup(data,navigate));
        setData({UserName:"",Password:""});
    }
  return (
    
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'10px',padding:'40px'}}>
        <div className="signup_">Signup</div>
        <Form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
            <FloatingLabel controlId="floatingInput" label="UserName" className="mb-3">
              <Form.Control name="UserName" onChange={handleChange} value={data.UserName} placeholder="UserName" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
              <Form.Control type={showPassword ? 'text' : 'password'} showPassword="true" name="Password" onChange={handleChange} value={data.Password} placeholder="password" />
              <Form.Check
          type="checkbox"
          label="Show Password"
          onChange={handleTogglePassword}
        />
            </FloatingLabel>
            {/* <Form type="text" name="UserName" onChange={handleChange} value={data.UserName} placeholder="enter username"></Form>
            <Form  name="Password" onChange={handleChange} type="password" value={data.Password} placeholder="enter password"></Form> */}
            <Button type="submit">submit</Button>
        </Form>
    </div>
    
  )
}
