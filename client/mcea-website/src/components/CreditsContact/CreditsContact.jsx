import React from 'react'
import './credits_contact.css';
import insta from '../assets/Gifs/instagram.svg';
import gmail from '../assets/Gifs/gmail.svg';
import linkedin from '../assets/Gifs/linkedin.svg';
import phone from '../assets/Gifs/phone.svg';
import github from '../assets/Gifs/github.svg';
import { Link } from 'react-router-dom';
//bootstraps
import { Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreditsContact() {
  return (
    <Container className="ctr">
      <div className="credits-contact-wrapper"> 
          <div className="dev-details"><p>Developer</p></div>
          <div className="dev-name" >PRANEASH K</div>    
          <div className="links-c" ><Link to="mailto:praneash2@gmail.com" target="_blank" style={{display:'flex',flexDirection:'row',textDecoration:'none',width:'110px',marginRight:'70px'}}> <img className="ig" src={gmail} ></img>  <div className='details' >praneash2@gmail.com</div> </Link> </div>
          <div className="links-c" ><Link to="https://www.linkedin.com/in/praneash-k-54013121a/" target="_blank" style={{display:'flex',flexDirection:'row',textDecoration:'none',marginRight:'50px'}}> <img className="ig" src={linkedin} ></img> <div className='details'>praneash k</div>  </Link></div>
          <div className="links-c" ><Link to="https://www.instagram.com/k.praneash/" target="_blank" style={{display:'flex',flexDirection:'row',textDecoration:'none',marginRight:'50px'}}> <img className="ig" src={insta} ></img> <div className='details'>k.praneash</div>  </Link> </div>
          <div className="links-c" ><Link to="https://github.com/praneash2" target="_blank" style={{display:'flex',flexDirection:'row',textDecoration:'none',marginRight:'60px'}}>   <img className="ig" src={github} ></img> <div className='details'>praneash2</div>  </Link></div>
          
          
          
      </div>
    </Container>

  )
}
