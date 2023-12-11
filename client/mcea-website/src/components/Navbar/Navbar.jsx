import React from 'react'
import {Link} from 'react-router-dom';
import { createBrowserHistory } from "history";
import collegeLogo from '../../img/kecLogo.png';
import mceaLogo from '../../img/mceaLogo.png';
import './styles.css';
//bootstraps
import { Container,Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar1() {
  const history = createBrowserHistory();
  
  return (
    ((history.location.pathname!=="/login")&&(history.location.pathname!=="/signup"))&&<Navbar style={{marginBottom:'2rem'}} className="me-auto">
        <Container fluid>
          <img style={{marginLeft:'1%',width:'7%',height:'7%'}} src={mceaLogo}></img>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav  >
            <Nav.Link style={{color:'#00E4FF',fontSize:'1.2rem'}} as={Link} to="/">Home</Nav.Link>
            
            <Nav.Link style={{color:'#00E4FF',fontSize:'1.2rem'}} as={Link} to="/events">Events</Nav.Link>
            <Nav.Link style={{color:'#00E4FF',fontSize:'1.2rem'}} as={Link} to="/about">About</Nav.Link>
            <Nav.Link style={{color:'#00E4FF',fontSize:'1.2rem'}} as={Link} to="/history">History</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
          <Link to='events'>events</Link>
          <Link to='history'>history</Link> */}
          <img style={{marginLeft:'1%',width:'7%',height:'7%'}} src={collegeLogo}></img>
        </Container>
    </Navbar>
    
  )
}
