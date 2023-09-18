import React from 'react'
import {Link} from 'react-router-dom';
import { createBrowserHistory } from "history";
export default function Navbar() {
  const history = createBrowserHistory();
  
  return (
    ((history.location.pathname!=="/login")&&(history.location.pathname!=="/signup"))&&<div className="navbar-wrapper">
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='events'>events</Link>
        <Link to='history'>history</Link>
    </div>
  )
}
