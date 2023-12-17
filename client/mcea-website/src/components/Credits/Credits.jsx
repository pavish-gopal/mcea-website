import React from 'react'
import './credits.css';
import {Link} from 'react-router-dom';
//bootstraps
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Credits() {
  return (
    <Container className="credits-wrapper">
        <div className="name-wrapper">
            <div className="line1">
                    <div className="l1"></div>
            </div>
            <div className="devBy">Developed By</div>
            <Link className="name" to="/dev">Praneash</Link>
            <div className="line2">
                <div className="l2"></div>
            </div>
        </div>
    
    </Container>
  )
}
