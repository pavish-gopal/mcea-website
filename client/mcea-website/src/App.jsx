import ReactDOM from "react-dom/client";

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

function App() {
  
  return (
    <BrowserRouter>
      <Navbar1></Navbar1>
      <ParticleBackground > </ParticleBackground>
      <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/history" element={<History/>}></Route>
      </Routes> 
      <Contacts></Contacts>
    </BrowserRouter>
  );
}

export default App;
