import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { createBrowserHistory } from "history";
import collegeLogo from '../../img/kecLogo.png';
import mceaLogo from '../../img/mceaLogo.png';

import {logout} from '../../actions/user.js';
import './styles.css';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
//bootstraps
import { Button, Container,Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar1() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [toggle,setToggle]=useState(false);
  const [Log,setLog]=useState(false);
  const history = createBrowserHistory();
  const handleToggle = (e)=>{
    
    setToggle(!toggle);
  }
  useEffect(()=>{
      if(localStorage.getItem('profile')){
        setLog(true);
      }
      else{
        setLog(false);
      }
  },[localStorage.getItem('profile')]);
  const Logout=(e)=>{
    e.preventDefault();
    dispatch(logout(navigate));
  }
  return (
    ((true))&&<Navbar style={{marginBottom:'2rem'}} className="me-auto">
        <div className="navbar-wrapper">
          <img className="mcea-logo" src={mceaLogo}></img>
          <div >
          
            <div className="navbar_main">
            <Link className="lk" style={{color:'#AFAA97',fontSize:'1.2rem'}} as={Link} to="/">Home</Link>
            
            <Link className="lk" style={{color:'#AFAA97',fontSize:'1.2rem'}} as={Link} to="/events">Events</Link>
            <Link className="lk" style={{color:'#AFAA97',fontSize:'1.2rem'}} as={Link} to="/about">About</Link>
            <Link className="lk" style={{color:'#AFAA97',fontSize:'1.2rem'}} as={Link} to="/history">History</Link>
            {(Log)&&<Button onClick={Logout} >logout</Button>}
            </div> 
            
            
            <div onClick={handleToggle} className="navbar_toggle">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>
          
          </div>
          
          
          
          {/* <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
          <Link to='events'>events</Link>
          <Link to='history'>history</Link> */}
          <img className="kec-logo" src={collegeLogo}></img>
          {(toggle)&&<div className="navbar_sliding">
            
            <img style={{width:'40px',marginTop:'30px'}} src={mceaLogo} ></img>
            <Link onClick={handleToggle} className="link" to='/' >Home</Link>
            <Link onClick={handleToggle} className="link" to='/events'>Events</Link>
            <Link onClick={handleToggle} className="link" to='/about'>About</Link>
            
            <Link onClick={handleToggle} className="link" to='/history'>History</Link>
            {(Log)&&<Button onClick={Logout} >logout</Button>}
          </div>}
        </div>
        
    </Navbar>
    
  )
}
