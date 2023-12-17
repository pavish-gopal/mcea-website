import ReactDOM from "react-dom/client";
import {Helmet} from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Events from './components/Events/Events';
import History from './components/History/History';

import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Navbar1 from "./components/Navbar/Navbar";
import ParticleBackground from "./particles/particle-baground/ParticlesBaground";
import Contacts from "./components/contacts/Contacts";
import Credits from "./components/Credits/Credits.jsx";
import CreditsContact from "./components/CreditsContact/CreditsContact.jsx";

function App() {
  
  return (
    <BrowserRouter>
          <Helmet>
                <meta charSet="utf-8" />
                <title>MCEA</title>
                <link rel="canonical" href="https://mceakec-41355.web.app/" />
                <meta name="description" content="mechatonics engineering association kongu engineering college" />
            </Helmet>
      <Navbar1></Navbar1>
      <ParticleBackground > </ParticleBackground>
      <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="/dev" element={<CreditsContact></CreditsContact>}></Route>
      </Routes> 
      <Contacts></Contacts>
      <Credits></Credits>
    </BrowserRouter>
  );
}

export default App;
